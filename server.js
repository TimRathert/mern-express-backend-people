require('dotenv').config()
require('./config/db.connection')


const { PORT } = process.env;
const express = require('express');
const app = express();
const peopleController = require('./controllers/people-controller');
const morgan = require('morgan');
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/people', peopleController)

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));