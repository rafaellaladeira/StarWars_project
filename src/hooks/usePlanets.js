/* import { useEffect, useState } from 'react';

function usePlanets() {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await fetch(url);
      const datas = await response.json();
      setData(datas);
    };
    fetchPlanets();
  }, []);
  return [{ resutls }];
}

export default usePlanets; */
