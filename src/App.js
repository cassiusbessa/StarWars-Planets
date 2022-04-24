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
  const [filtredByArgumments, setFiltredByArgumments] = useState([]);
  const [argummentColumn, setArgumentColumn] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);
  const [order, setOrder] = useState({ column: 'population', sort: null });

  const handleFilterPlanets = ({ target: { value, name } }) => {
    const handleFilterPlanetTable = {
      filterName: () => setFilterByName({ name: value }),
      filterColumn: () => setfilterByNumericValues({ ...filterByNumericValues,
        column: value }),
      filterNumber: () => setfilterByNumericValues({ ...filterByNumericValues, value }),
      filterComparison: () => setfilterByNumericValues({ ...filterByNumericValues,
        comparison: value }),
      inputSort: () => setOrder({ ...order, column: value }),
      inputOrder: () => setOrder({ ...order, sort: value }),
    };
    handleFilterPlanetTable[name]();
  };
  const data = {
    handleFilterPlanets,
    setfilterByNumericValues,
    filterByName,
    setFilteredPlanet,
    filteredPlanet,
    planet,
    filterByNumericValues,
    setFiltredByArgumments,
    filtredByArgumments,
    argummentColumn,
    setArgumentColumn,
    allNumbersFilters,
    setAllNumbersFilters,
    order,
  };
  useEffect(() => {
    const fetchPlanets = async () => {
      const { results } = await getPlanets();
      console.log(results);
      results.sort((a, b) => a.name.localeCompare(b.name));
      console.log(results);
      setPlanet(results);
    };
    fetchPlanets();
  }, []);

  useEffect(() => {
    const filteredName = planet.filter(({ name }) => name.includes(filterByName.name));
    setFilteredPlanet(filteredName);
  }, [filterByName, planet]);

  useEffect(() => {
    console.log('chamei');
    const toFilter = filteredPlanet;
    if (toFilter.length > 0 && allNumbersFilters.length > 0) {
      const argumments = allNumbersFilters.reduce((acc, curr) => {
        const { column, comparison, value } = curr;
        acc = [...filterAll(acc, comparison, column, value)];
        return acc;
      }, toFilter);
      setFiltredByArgumments(argumments);
    } else setFiltredByArgumments(toFilter);
  }, [allNumbersFilters, filteredPlanet]);

  return (
    <planetContext.Provider value={ data }>
      <Content />
    </planetContext.Provider>
  );
}

export default App;
