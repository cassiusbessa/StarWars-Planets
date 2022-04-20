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
  const [allNumbersFilters, setAllNumbersFilters] = useState([]);
  const [filtredByArgumments, setfiltredByArgumments] = useState([]);
  const [argummentColumn, setArgumentColumn] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);

  const handleFilterPlanets = ({ target: { value, name } }) => {
    const handleFilterPlanetTable = {
      filterName: () => setFilterByName({ name: value }),
      filterColumn: () => setfilterByNumericValues({ ...filterByNumericValues,
        column: value }),
      filterNumber: () => setfilterByNumericValues({ ...filterByNumericValues, value }),
      filterComparison: () => setfilterByNumericValues({ ...filterByNumericValues,
        comparison: value }),
    };
    handleFilterPlanetTable[name]();
  };
  const data = {
    handleFilterPlanets,
    setfilterByNumericValues,
    filterByName,
    filteredPlanet,
    planet,
    filterByNumericValues,
    filtredByArgumments,
    argummentColumn,
    setArgumentColumn,
    allNumbersFilters,
    setAllNumbersFilters,
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
  }, [allNumbersFilters, filterByName, planet]);

  useEffect(() => {
    const toFilter = filteredPlanet;
    if (toFilter.length > 0 && allNumbersFilters.length > 0) {
      const argumments = allNumbersFilters.reduce((acc, curr) => {
        const { column, comparison, value } = curr;
        acc = [...filterAll(acc, comparison, column, value)];
        return acc;
      }, toFilter);
      setfiltredByArgumments(argumments);
    } else setfiltredByArgumments(toFilter);
  }, [allNumbersFilters, filteredPlanet]);

  return (
    <planetContext.Provider value={ data }>
      <Content />
    </planetContext.Provider>
  );
}

export default App;
