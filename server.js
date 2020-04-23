const app = require('./app');
const { conn, User } = require('./db');

conn.sync({ force: true })
    .then(() => Promise.all([
            User.create({ name: 'curly' }),
            User.create({ name: 'stannie' }),
            User.create({ name: 'hello' })
        ])
    )

const port = process.env.PORT || 3000;
app.listen(port);