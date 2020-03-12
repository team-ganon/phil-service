const { User, Review }  = require('./index.js');
const faker = require('faker');

const users = [];
for (let i = 1; i <= 100; i++) {
  users.push({
    name: faker.name.findName()
  })
}

const reviews = [];

const seedDb = function() {
  User.insertMany(users)
    .then(() => User.find())
    .then( users => {
      for (let i = 0; i < users.length; i++) {
        let random = Math.floor(Math.random() * 100);
        for (let j = 0; j < random; j++) {
          reviews.push({
              user: users[i]._id, 
              rental: i + 1,
              body: faker.fake('{{lorem.paragraph}}')
            }
          )
        }
      }
      return Review.insertMany(reviews)
    })
    .then(() => {})
    .catch((e) => console.log(e))
};

seedDb();
