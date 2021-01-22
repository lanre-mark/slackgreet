var settings = require('./settings'),
    SimpleNodeLogger = require('simple-node-logger');

var opts = {
  logFilePath:settings.logFile,
  timestampFormat:'YYYY-MM-DD HH:mm:ss.SSS'
};
var log = SimpleNodeLogger.createSimpleLogger( opts );

module.exports = {
  log
}