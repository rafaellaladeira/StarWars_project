import React, { useContext } from 'react';
import APIContext from '../../context/APIContext';

function Table() {
  const { data } = useContext(APIContext);

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

  return (
    <section>
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
        }
      </table>
    </section>
  );
}

export default Table;
