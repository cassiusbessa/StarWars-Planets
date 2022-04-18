const getPlanets = async () => {
  const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await fetch(END_POINT);
  const data = await response.json();

  return data;
};

export default getPlanets;
