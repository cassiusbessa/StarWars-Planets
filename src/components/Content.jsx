import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PlanetTable from './PlanetsTable';

import Intro from './Intro';

function Content() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Intro /> } />
        <Route path="/table" element={ <PlanetTable /> } />
      </Routes>
    </BrowserRouter>
  );
}
export default Content;
