import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import PlanetTable from './PlanetsTable';

import Intro from './Intro';

function Content() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={ <Intro /> } />
        <Route path="/table" element={ <PlanetTable /> } />
      </Routes>
    </HashRouter>
  );
}
export default Content;
