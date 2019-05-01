require('dotenv').config();
// *** Dependencies  ***
// const session = require('express-session');
const port = process.env.PORT || 3001;
const express = require('express');
const massive = require('massive');
const cors = require('cors');
const { json } = require('body-parser');
const app = express();

// *** CONTROLLER DESTRUCTURING ***
const { getAllProperties } = require('./controllers/clientCtrl');
const { postNewListing } = require('./controllers/adminCtrl');

app.use(json());
app.use(cors());

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

//*** ENDPOINTS ***
app.get('/api/getAll', getAllProperties);
app.post('/api/postNew', postNewListing);

app.listen(port, () => {
  console.log(`Port ${port} is listening...`);
});
