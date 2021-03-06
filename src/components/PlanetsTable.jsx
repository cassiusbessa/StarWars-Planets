import React, { useContext, useEffect, useState } from 'react';
import planetContext from '../contexts/planetContext';
import FilterForms from './FilterForms';
import '../App.css';

function PlanetTable() {
  const { filtredByArgumments: planet } = useContext(planetContext);
  const [planetsList, setPlanetsList] = useState([]);
  const [tableHead, setTableHead] = useState([]);

  useEffect(() => {
    console.log('tabela');
    setPlanetsList(planet);
    if (planet.length > 0) {
      setTableHead(Object.keys(planet[0]).filter((key) => key !== 'residents'));
    }
  }, [planet, planetsList]);

  return (
    <div>
      <FilterForms />
      {planetsList.length > 0 && (
        <table>
          <thead>
            <tr>
              {tableHead.map((head) => (
                <th key={ head }>{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {planetsList.map((p) => (
              <tr key={ p.name }>
                <td data-testid="planet-name">{p.name}</td>
                <td>{p.rotation_period}</td>
                <td>{p.orbital_period}</td>
                <td>{p.diameter}</td>
                <td>{p.climate}</td>
                <td>{p.gravity}</td>
                <td>{p.terrain}</td>
                <td>{p.surface_water}</td>
                <td>{p.population}</td>
                <td>{p.films}</td>
                <td>{p.created}</td>
                <td>{p.edited}</td>
                <td>{p.url}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>

  );
}

export default PlanetTable;
