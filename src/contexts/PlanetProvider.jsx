import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import planetContext from './planetContext';
import getPlanets from '../services';

const PlanetProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const handlePlanets = ({ target: { value, name } }) => {
    const handlePlanetsTable = {
      request: async () => setPlanets(await getPlanets()),
    };
    handlePlanetsTable[name]();
  };
  const data = {
    planets,
    handlePlanets,
  };
  useEffect(() => {
    const fetchPlanets = async () => {
      const infoPlanets = await getPlanets();
      setPlanets(infoPlanets);
    };
    fetchPlanets();
  }, []);

  return (
    <planetContext.Provider data={ data }>
      {children}
    </planetContext.Provider>
  );
};
export default PlanetProvider;

PlanetProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
