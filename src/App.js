import React, { useState, useEffect } from 'react';
import planetContext from './contexts/planetContext';
import getPlanets from './services';
import Content from './components/Content';

function App() {
  const [planet, setPlanet] = useState([]);
  const handleFilterPlanets = ({ target: { value, name } }) => {
    const handleFilterPlanetTable = {
      request: console.log('request'),
    };
    handleFilterPlanetTable[name]();
  };
  const data = {
    planet,
    handleFilterPlanets,
  };
  useEffect(() => {
    const fetchPlanets = async () => {
      const { results } = await getPlanets();
      setPlanet(results);
    };
    fetchPlanets();
  }, []);
  return (
    <planetContext.Provider value={ data }>
      <Content />
    </planetContext.Provider>
  );
}

export default App;
