const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_db');

const User = conn.define('user', {
    name: {
        type: Sequelize.STRING
    }
});

module.exports = {
    User,
    conn
}