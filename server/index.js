const express = require('express');
const bodyParser = require('body-parser');
let app = express();
app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

app.use(express.static(__dirname + '/../public/dist'));

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);