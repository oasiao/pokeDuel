const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

const users = require('./routes/api/users');

app.use('/api/users',users);

const pokemons = require('./routes/api/pokemons');

app.use('/api/pokemons', pokemons);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));