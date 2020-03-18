describe('Testing /api/rentals/:id', () => {

  it('Testing /api/rentals/:id', () => {
    return fetch(`http://localhost:3001/api/rentals/1`)
      .then(data => data.json())
      .then(data => expect(data[1].userProfile.name).toEqual('Rosalia Crona'))
      .catch((e) => console.log(e));
  });

});