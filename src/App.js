import React, { useState, useEffect } from 'react';
import planetContext from './contexts/planetContext';
import { getPlanets, filterAll } from './services';
import Content from './components/Content';

function App() {
  const [planet, setPlanet] = useState([]);
  const [filteredPlanet, setFilteredPlanet] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setfilterByNumericValues] = useState(
    { column: 'population', comparison: 'maior que', value: 0 },
  );
  const [filterArgument, setfilterArgument] = useState(0);

  const handleFilterPlanets = ({ target: { value, name } }) => {
    const handleFilterPlanetTable = {
      filterName: () => setFilterByName({ name: value }),
      filterColumn: () => setfilterByNumericValues({ ...filterByNumericValues,
        column: value }),
      filterNumber: () => setfilterByNumericValues({ ...filterByNumericValues, value }),
    };
    console.log(name, value);
    handleFilterPlanetTable[name]();
  };
  const data = {
    handleFilterPlanets,
    setfilterByNumericValues,
    filterByName,
    filteredPlanet,
    planet,
    filterByNumericValues,
  };
  useEffect(() => {
    const fetchPlanets = async () => {
      const { results } = await getPlanets();
      setPlanet(results);
    };
    fetchPlanets();
  }, []);

  useEffect(() => {
    const filteredName = planet.filter(({ name }) => name.includes(filterByName.name));
    setFilteredPlanet(filteredName);
  }, [filterByName, planet]);

  return (
    <planetContext.Provider value={ data }>
      <Content />
    </planetContext.Provider>
  );
}

export default App;
