require('dotenv').config();
// ***** Dependencies  ****
const express = require("express");
const {json} = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 3001;

const app = express();
app.use(json());
app.use(cors());

app.listen(port, () => {console.log(`Port ${port} is listening...`);});
