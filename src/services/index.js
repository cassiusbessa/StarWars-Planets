export const getPlanets = async () => {
  const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await fetch(END_POINT);
  const data = await response.json();
  return data;
};

export const filterAll = (array, signal, argumment, value) => {
  switch (signal) {
  case 'maior que':
    return array.filter((e) => (+e[argumment]) > (+value));
  case 'menor que':
    return array.filter((e) => (+e[argumment]) < (+value));
  case 'igual a':
    return array.filter((e) => (+e[argumment]) === (+value));

  default:
    break;
  }
};
