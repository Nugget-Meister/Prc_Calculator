const pgp = require('pg-promise')

require("dotenv").config()

const config = process.env.PG_URL ? {
    connectionString: process.env.PG_URL,
    max: 30,
    ssl: true
} : {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER
}

const db = pgp(config);

console.log("postgres: ", config)

module.exports = db