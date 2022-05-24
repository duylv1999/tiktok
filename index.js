require('dotenv').config();

const express = require('express');
const db = require('./src/config/db');
const router = express.Router();
const UsersModel = require('./src/app/models/user.models');

// connect to DB
db.connect();

const app = express();
const port = 9000;
app.use(express.json());

app.post('/user', (req, res) => {
    const data = new UsersModel(req.body);

    data.save();
    res.send('Create user successfully.......');
});

app.listen(port, () => {
    console.log(`Server started at ${port}`);
});
