import React, { useState, useEffect } from 'react';
import planetContext from './contexts/planetContext';
import getPlanets from './services';
import Content from './components/Content';

function App() {
  const [planet, setPlanet] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filteredPlanet, setFilteredPlanet] = useState([]);
  const handleFilterPlanets = ({ target: { value, name } }) => {
    const handleFilterPlanetTable = {
      filterName: () => setFilterByName({ name: value }),
    };
    console.log(name, value);
    handleFilterPlanetTable[name]();
  };
  const data = {
    handleFilterPlanets,
    filterByName,
    filteredPlanet,
    planet,
  };
  useEffect(() => {
    const fetchPlanets = async () => {
      const { results } = await getPlanets();
      setPlanet(results);
    };
    fetchPlanets();
  }, []);

  useEffect(() => {
    const filtered = planet.filter(({ name }) => name.includes(filterByName.name));
    setFilteredPlanet(filtered);
  }, [filterByName, planet]);

  return (
    <planetContext.Provider value={ data }>
      <Content />
    </planetContext.Provider>
  );
}

export default App;
