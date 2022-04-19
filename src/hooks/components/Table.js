import React, { useContext, useState } from 'react';
import APIContext from '../../context/APIContext';

function Table() {
  const { data } = useContext(APIContext);
  const [filterByName, setFilterByName] = useState('');

  const planetName = data.filter((values) => values.name.includes(filterByName));

  return (
    <section>
      <input
        data-testid="name-filter"
        type="text"
        name="name"
        placeholder="Nome do planeta"
        value={ filterByName }
        onChange={ (e) => setFilterByName(e.target.value) }
      />
      <h1>Star Wars</h1>
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
          planetName
            ? (
              planetName.map((value) => (
                <tbody key={ value.name }>
                  <tr>
                    <td>{ value.name }</td>
                    <td>{ value.rotation_period }</td>
                    <td>{ value.orbital_period }</td>
                    <td>{ value.diameter }</td>
                    <td>{ value.climate }</td>
                    <td>{ value.gravity }</td>
                    <td>{ value.terrain }</td>
                    <td>{ value.surface_water }</td>
                    <td>{ value.population }</td>
                    <td>{ value.films }</td>
                    <td>{ value.created }</td>
                    <td>{ value.edited }</td>
                    <td>{ value.url }</td>
                  </tr>
                </tbody>
              )))
            : (
              data.map((values) => (
                <tbody key={ values.name }>
                  <tr>
                    <td>{ values.name }</td>
                    <td>{ values.rotation_period }</td>
                    <td>{ values.orbital_period }</td>
                    <td>{ values.diameter }</td>
                    <td>{ values.climate }</td>
                    <td>{ values.gravity }</td>
                    <td>{ values.terrain }</td>
                    <td>{ values.surface_water }</td>
                    <td>{ values.population }</td>
                    <td>{ values.films }</td>
                    <td>{ values.created }</td>
                    <td>{ values.edited }</td>
                    <td>{ values.url }</td>
                  </tr>
                </tbody>
              ))
            )
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
