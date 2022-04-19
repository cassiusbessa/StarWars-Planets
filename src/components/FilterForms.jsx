import React, { useContext, useState } from 'react';
import planetContext from '../contexts/planetContext';

function FilterForms() {
  const { filterName, handleFilterPlanets,
    filterByNumericValues, setfilterByNumericValues } = useContext(planetContext);
  const [argummentFilter, setArgumentFilter] = useState([]);
  const [argummentColumn, setArgumentColumn] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);
  const [disableFilter, setDisableFilter] = useState(false);

  const removeArgument = (argumment) => {
    const argumments = argummentColumn.filter((column) => column !== argumment);
    setArgumentColumn(argumments);
    if (argumments.length === 0) {
      setDisableFilter(true);
    }
    setfilterByNumericValues({
      column: argumments[0], comparison: 'maior que', value: 0 });
  };

  const submitFilter = (e) => {
    e.preventDefault();
    console.log('chamei');
    console.log(filterByNumericValues);
    const argumment = Object.values(filterByNumericValues).reduce((acc, crr) => {
      acc = acc.concat(' ', crr);
      return acc;
    });
    removeArgument(filterByNumericValues.column);
    setArgumentFilter([...argummentFilter, argumment]);
  };

  return (
    <>
      <input
        data-testid="name-filter"
        type="text"
        name="filterName"
        value={ filterName }
        onChange={ handleFilterPlanets }
      />
      <form onSubmit={ submitFilter }>
        <label htmlFor="column-filter">
          Coluna
          <select
            value={ filterByNumericValues.column }
            name="filterColumn"
            onChange={ handleFilterPlanets }
            data-testid="column-filter"
            id="column-filter"
          >
            {argummentColumn.map((column) => (
              <option key={ column } value={ column }>{column}</option>
            ))}
          </select>
        </label>
        <label htmlFor="comparison-filter">
          Operador
          <select
            value={ filterByNumericValues.comparison }
            name="filterComparison"
            onChange={ handleFilterPlanets }
            data-testid="comparison-filter"
            id="comparison-filter"
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <label htmlFor="value-filter">
          Valor
          <input
            value={ filterByNumericValues.value }
            name="filterNumber"
            onChange={ handleFilterPlanets }
            data-testid="value-filter"
            type="number"
            id="value-filter"
          />
        </label>
        <button
          disabled={ disableFilter }
          data-testid="button-filter"
          type="submit"
        >
          Filtrar
        </button>
      </form>
      { argummentFilter.length > 0 && (
        <>
          <h5>Filtros</h5>
          <ul>
            { argummentFilter.map((arg) => (
              <li key={ arg }>{ arg }</li>
            )) }
          </ul>
        </>
      )}
    </>
  );
}

export default FilterForms;
