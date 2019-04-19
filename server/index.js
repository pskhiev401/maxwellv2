require('dotenv').config();
// *** Dependencies  ***
// const session = require('express-session');
const express = require("express");
const massive = require('massive');
const {json} = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 3001;

const app = express();
app.use(json());
app.use(cors());

// *** CONTROLLER DESTRUCTURING ***
const {getAllProperties} = require('./controllers/clientCtrl');

//**** SESSIONS ****
// app.use(
//   session({
//     resave: false,
//     saveUninitialized: true,
//     secret: process.env.SESSION_SECRET,
//     cookie: {
//       maxAge: 1000 * 60 * 60 * 24 * 7
//     }
//   })
// );

//*** CONNECTION TO DB ***
massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set('db', dbInstance);
  })
  .catch(err => console.log(err));


//*** ENPOINTS ***
app.get(`/api/getAll`, getAllProperties)

app.listen(port, () => {console.log(`Port ${port} is listening...`);});
