import React, { useContext } from 'react';
import planetContext from '../contexts/planetContext';

function FilterForms() {
  const { filterName, handleFilterPlanets } = useContext(planetContext);

  return (
    <input
      data-testid="name-filter"
      type="text"
      name="filterName"
      value={ filterName }
      onChange={ handleFilterPlanets }
    />
  );
}

export default FilterForms;
