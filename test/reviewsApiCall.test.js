const axios = require('axios');

const fetchData = () => {
  return axios.get(`http://localhost:3001/api/rentals/1`)
    .then(response => response.data)
    .then(dataJson => dataJson[1].userProfile.name);
};


test('Testing /api/rentals/:id', () => {
  return fetchData()
    .then(data => expect(data).toEqual('Rosalia Crona'))
    .catch((e) => console.log(e));
});