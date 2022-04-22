import React, { useContext, useState } from 'react';
import APIContext from '../../context/APIContext';

function Table() {
  const { data } = useContext(APIContext);
  const [filterByName, setFilterByName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  const planetName = data.filter((values) => values.name.includes(filterByName));
  const OPTIONS = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];

  const filterOne = planetName.filter((item) => {
    if (filterByNumericValues.comparison === 'menor que') {
      return item[filterByNumericValues.column] < Number(filterByNumericValues.value);
    }
    if (filterByNumericValues.comparison === 'maior que') {
      return item[filterByNumericValues.column] > Number(filterByNumericValues.value);
    }
    if (filterByNumericValues.comparison === 'igual a') {
      return Number(item[filterByNumericValues.column]) === Number(filterByNumericValues
        .value);
    }
    return item;
  });

  const filtering = filterOne.filter((filt) => {
    if (filterByNumericValues.prevState) {
      if (filterByNumericValues.prevState.comparison === 'menor que') {
        return filt[filterByNumericValues.prevState.column] < Number(filterByNumericValues
          .prevState.value);
      }
      if (filterByNumericValues.prevState.comparison === 'maior que') {
        return filt[filterByNumericValues.prevState.column] > Number(filterByNumericValues
          .prevState.value);
      }
      if (filterByNumericValues.prevState.comparison === 'igual a') {
        return Number(filt[filterByNumericValues
          .prevState.column]) === Number(filterByNumericValues.prevState.value);
      }
    }
    return filt;
  });

  const options = OPTIONS.filter((change) => {
    if (filterByNumericValues.column) {
      return change !== filterByNumericValues.column;
    }
    return change;
  });

  const handleClick = () => {
    setFilterByNumericValues((prevState) => ({
      prevState,
      column,
      comparison,
      value,
    }));
    console.log(column);
  };

  return (
    <section>
      <h1>Star Wars</h1>
      <div>
        <input
          data-testid="name-filter"
          type="text"
          name="name"
          placeholder="Nome do planeta"
          value={ filterByName }
          onChange={ (e) => setFilterByName(e.target.value) }
        />
        <label htmlFor="column">
          Coluna:
          <select
            data-testid="column-filter"
            id="column"
            onChange={ (e) => setColumn(e.target.value) }
          >
            {
              options.map((option) => (
                <option
                  key={ option }
                  value={ option }
                >
                  { option }
                </option>
              ))
            }
          </select>
        </label>
        <label htmlFor="valor">
          Valor:
          <select
            data-testid="comparison-filter"
            id="valor"
            onChange={ (e) => setComparison(e.target.value) }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <input
          data-testid="value-filter"
          type="number"
          defaultValue="0"
          onChange={ (e) => setValue(e.target.value) }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Filtrar
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        {
          filtering.map((item) => (
            <tbody key={ item.name }>
              <tr>
                <td>{ item.name }</td>
                <td>{ item.rotation_period }</td>
                <td>{ item.orbital_period }</td>
                <td>{ item.diameter }</td>
                <td>{ item.climate }</td>
                <td>{ item.gravity }</td>
                <td>{ item.terrain }</td>
                <td>{ item.surface_water }</td>
                <td>{ item.population }</td>
                <td>{ item.films }</td>
                <td>{ item.created }</td>
                <td>{ item.edited }</td>
                <td>{ item.url }</td>
              </tr>
            </tbody>
          ))
        }
      </table>
    </section>
  );
}

export default Table;

// DADOS QUE VOU USAR NA HORA DE REFATORAR A PAGINA TABLE:
/* const gettingKeys = data.map((item) => Object.keys(item)
    .filter((key) => key !== 'residents'));
  const keysTook = gettingKeys[0];
  console.log(keysTook);

    {
            TABLE_ROWS.map((row) => (
              <thead key={ row } className="thead">
                <th>{row}</th>
              </thead>
            ))
          }
  */

/* const TABLE_ROWS = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter',
    'Climate', 'Gravity', 'Terrain', 'Surface Water', 'Population', 'Films',
    'Created', 'Edited', 'URL']; */
