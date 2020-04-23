const express = require('express');
const app = express();
const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_db_test');

const User = conn.define('user', {
    name: Sequelize.STRING
});

const { expect } = require('chai');

const _app = require('supertest')(app);

app.get('/api/users', async(req, res, next) => {
    res.send(await User.findAll());
});

describe('the truth', () => {
    it('true to equal true', () => {
        expect(true).to.equal(true);
    });
});

describe('GET /api/users', () => {
    beforeEach(async() => {
        await conn.sync({ force: true });
        await Promise.all([
            User.create({ name: "lucy" }),
            User.create({ name: "moe" })
        ]);     
    });
    it('returns the users', async () => {
        const response = await _app.get('/api/users');
        expect(response.status).to.equal(200);
        expect(response.body.length).to.equal(2);
    }); 
});