import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import planetContext from './planetContext';
import getPlanets from '../services';

const PlanetProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const handleFilterPlanets = ({ target: { value, name } }) => {
    const handleFilterPlanetTable = {
      request: async () => setData(await getPlanets()),
    };
    handleFilterPlanetTable[name]();
  };
  const handlePlanets = {
    data,
    handleFilterPlanets,
  };
  useEffect(() => {
    const fetchPlanets = async () => {
      const { results } = await getPlanets();
      setData(results);
    };
    fetchPlanets();
  }, []);

  return (
    <planetContext.Provider value={ handlePlanets }>
      {children}
    </planetContext.Provider>
  );
};
export default PlanetProvider;

PlanetProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
