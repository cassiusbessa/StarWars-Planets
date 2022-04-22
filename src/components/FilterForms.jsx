import React, { useContext, useState, useEffect } from 'react';
import planetContext from '../contexts/planetContext';

function FilterForms() {
  const { filterName, handleFilterPlanets,
    filterByNumericValues, setfilterByNumericValues,
    allNumbersFilters, setAllNumbersFilters,
    argummentColumn, setArgumentColumn, order,
    setFiltredByArgumments, filtredByArgumments } = useContext(planetContext);
  const [disableFilter, setDisableFilter] = useState(false);
  const [argumments] = useState(argummentColumn);

  const removeArgument = (argumment) => {
    setArgumentColumn(argummentColumn.filter((column) => column !== argumment));
    if (argummentColumn.length === 0) {
      setDisableFilter(true);
    }
  };

  useEffect(() => {
    setfilterByNumericValues({
      column: argummentColumn[0], comparison: 'maior que', value: 0 });
  }, [argummentColumn, setfilterByNumericValues]);

  const submitFilter = (e) => {
    e.preventDefault();
    removeArgument(filterByNumericValues.column);
    setAllNumbersFilters([...allNumbersFilters, filterByNumericValues]);
  };

  const removeNumberFilter = ({ target: { id } }) => {
    setAllNumbersFilters(allNumbersFilters.filter((e) => e.column !== id));
    setArgumentColumn([...argummentColumn, id]);
  };

  const removeAllFilters = () => {
    setAllNumbersFilters([]);
  };

  const handleOrder = (e) => {
    e.preventDefault();
    const { column, sort } = order;

    if (sort === null) return;

    const toOrder = [...filtredByArgumments];

    const anao = toOrder.filter((b) => b[column] === 'unknown');
    const sanao = toOrder.filter((a) => a[column] !== 'unknown');

    console.log(anao);

    sanao.sort((a, b) => {
      if (sort === 'asc') {
        if (a[column] === 'unknown') {
          return b[column] - a[column];
        }
        return (+a[column]) - (+b[column]);
      }
      return b[column] - a[column];
    });
    const ordered = [...sanao, ...anao];
    setFiltredByArgumments(ordered);
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
      { allNumbersFilters.length > 0 && (
        <>
          <h5>Filtros</h5>
          <ul>
            { allNumbersFilters.map(({ column, comparison, value }) => (
              <li
                data-testid="filter"
                key={ column }
              >
                { `${column} ${comparison} ${value}` }
                <button
                  id={ column }
                  onClick={ removeNumberFilter }
                  type="button"
                >
                  X
                </button>
              </li>
            )) }
          </ul>
        </>
      )}
      <button
        onClick={ removeAllFilters }
        type="button"
        data-testid="button-remove-filters"
      >
        Remover todas Filtragens
      </button>
      <form>
        <label htmlFor="sort">
          Ordenar por
          <select
            data-testid="column-sort"
            id="sort"
            name="inputSort"
            onChange={ handleFilterPlanets }
            value={ order.column }
          >
            {argumments.map((argumment) => (
              <option key={ argumment } value={ argumment }>{argumment}</option>
            ))}
          </select>
        </label>
        <label htmlFor="asc">
          Ascendente
          <input
            onChange={ handleFilterPlanets }
            value="asc"
            type="radio"
            data-testid="column-sort-input-asc"
            id="asc"
            name="inputOrder"
          />
        </label>
        <label htmlFor="desc">
          Descendente
          <input
            onChange={ handleFilterPlanets }
            value="desc"
            type="radio"
            data-testid="column-sort-input-desc"
            id="desc"
            name="inputOrder"
          />
        </label>
        <button
          onClick={ handleOrder }
          type="submit"
          data-testid="column-sort-button"
        >
          Ordenar

        </button>
      </form>
    </>
  );
}

export default FilterForms;
