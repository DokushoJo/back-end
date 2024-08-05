// import knex from "knex";
// import knexConfig from "../knexfile";
// import type { Knex } from "knex";

// const environment = process.env.NODE_ENV || "development";
// const config = knexConfig[environment];

// const db = knex(config);

// export default db;

const config = require('../knexfile');
const knex = require('knex')(config);

module.exports = knex;
