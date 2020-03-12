const { db, User, Review, Rental}  = require('./index.js');
const faker = require('faker');

const users = [];
for (let i = 1; i <= 100; i++) {
  users.push({
    name: faker.name.findName()
  })
}
const reviews = [];
const rentals = [];
let usedReviews = [];


const seedDb = function() {
  User.insertMany(users)
    .then(() => User.find())
    .then( users => {
      for (let i = 0; i < users.length; i++) {
        let random = Math.floor(Math.random() * 100);
        for (let j = 0; j < random; j++) {
          reviews.push({
              user: users[i]._id, 
              body: faker.fake('{{lorem.paragraph}}')
            }
          )
        }
      }
      return Review.insertMany(reviews)
    })
    .then((reviews) => {
      for (let i = 1; i <= 100; i++) {
        let rental = new Rental({_id: i});
        let random = Math.floor(Math.random() * 100);
        for (let j = 0; j < random; j++) {
          rental.reviews.push(reviews[j]._id);
        }
        Rental.create(rental)
        .then(() => {})
        .catch(e => console.log(e, `rental create error`))
      }
     
    });
};

const findAndRemoveUnusedReviews = () => {
  Review.find({})
    .then(res => console.log(res, '=========find========='))
    .catch(e => console.log(e, '===========findcatch========='))
}



seedDb();
findAndRemoveUnusedReviews();