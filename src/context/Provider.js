import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import APIContext from './APIContext';

function Provider({ children }) {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const [data, setData] = useState([]);

  const fetchPlanets = async () => {
    const response = await fetch(url);
    const { results } = await response.json();
    setData(results);
    console.log(results);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const contextValue = {
    data,
    setData,
  };

  return (
    <APIContext.Provider value={ contextValue }>
      {children}
    </APIContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
