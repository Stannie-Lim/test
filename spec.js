const express = require('express');
const app = express();
const { expect } = require('chai');

const _app = require('supertest')(app);

app.get('/api/users', (req, res, next) => {
    res.send([ {name: "lucy"} ]);
});

describe('the truth', () => {
    it('true to equal true', () => {
        expect(true).to.equal(true);
    });
});

describe('GET /api/users', () => {
    it('returns the users', async () => {
        const response = await _app.get('/api/users');
        expect(response.status).to.equal(200);
        expect(response.body.length).to.equal(1);
    }); 
});