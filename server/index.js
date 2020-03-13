const express = require('express');
const { User, Review } = require('./db/index.js')
let app = express();
app.use(express.json())
app.use(express.static(__dirname + '/../public/dist'));

app.get('/api/rentals/:id', async (req, res) => {
  try {
    let reviews = await Review.find({ rental: req.params.id});
    console.log(reviews)
    let newArray = [];
    for (let i = 0; i < reviews.length; i++) {
      let user = await User.findById(reviews[i].user);
      let copy = {...reviews[i]._doc, userProfile: user};
      newArray.push(copy)
    }
   res.json(newArray)
  } catch (e) {
    res.sendStatus(500);
  }
})


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3001;
}
app.listen(port);