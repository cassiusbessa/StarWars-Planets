import React from 'react';
import PlanetTable from './PlanetsTable';
import FilterForms from './FilterForms';

function Content() {
  return (
    <>
      <h1>Planetas</h1>
      <FilterForms />
      <PlanetTable />
    </>
  );
}
export default Content;
