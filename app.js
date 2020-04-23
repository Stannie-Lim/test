const express = require('express');
const app = express();
const { User } = require('./db');

app.get('/api/users', async(req, res, next) => {
    res.send(await User.findAll());
});

module.exports = app;