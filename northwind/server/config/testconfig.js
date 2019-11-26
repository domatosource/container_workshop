
const config = require('./config.json');

const testtest = process.env.DB_HOST || config.db_host || 'localhost';

exports.testtest = testtest;