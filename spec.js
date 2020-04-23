const app = require('supertest')(require('./app'));
const { conn, User } = require('./db');
const { expect } = require('chai');

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
        const response = await app.get('/api/users');
        expect(response.status).to.equal(200);
        expect(response.body.length).to.equal(2);
    }); 
});