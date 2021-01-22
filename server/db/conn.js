var promise = require('bluebird'),
  inspect = require('util').inspect;
var settings = require('./settings');

var options = {
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = settings.dbString + "/slackrepo";
var db = pgp(connectionString);
var qryLiteral = '';

module.exports = {
  db,
  qryLiteral,
}