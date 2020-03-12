const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/airbnb';
const db = mongoose.connect(mongoUri);

const userSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
});

//Havent figured out imageUrl plays into this with S3 yet

const User = mongoose.model('users', userSchema);

const reviewsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  body: String,
  date: { type: Date, default: Date.now }
});

const Review = mongoose.model('reviews', reviewsSchema);

const rentalsSchema = new mongoose.Schema({
  _id: Number,
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'reviews'
  }]
});

const Rental = mongoose.model('rentals', rentalsSchema);

module.exports.db = db;
module.exports.User = User;
module.exports.Review = Review;
module.exports.Rental = Rental;