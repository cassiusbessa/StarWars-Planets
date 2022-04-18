import React from 'react';
import './App.css';
import PlanetProvider from './contexts/PlanetProvider';

function App() {
  return (
    <PlanetProvider>
      <span>Hello, App!</span>
    </PlanetProvider>
  );
}

export default App;
