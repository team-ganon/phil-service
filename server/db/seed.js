// const { db, User, Review}  = require('./index.js');

// const users = [
//   {
//     name: 'John',
//     imageUrl: 'nothing',
//   },
//   {
//     name: 'Mike',
//     imageUrl: 'nothing',
//   }
// ];

// const reviews = [
//   'hello',
//   'bye'
// ]

// const seedDb = function() {
//   User.insertMany(users)
//     .then(() => User.find())
//     .then(results => {
//       for (let i = 0; i < results.length; i++) {
//         Review.create({user: results[i]._id, body: reviews[i]})
//           .then(() => {})
//           .catch(e => console.log(e))
//       }
//       db.disconnect()
//     })

// };

// seedDb();