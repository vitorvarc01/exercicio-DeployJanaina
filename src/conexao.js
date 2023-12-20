const knex = require('knex')({
  client: 'pg',
  connection: {
    host: `silly.db.elephantsql.com`,
    port: 5432,
    user: `javkizyc`,
    password: `FckFbR7DS_wwnp2crPD5c-zl7Yd2MDfV`,
    database: `javkizyc`,
    ssl: { rejectUnauthorized: false }
  }
});

module.exports = knex