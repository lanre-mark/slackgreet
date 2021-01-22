const util = require('util'),
    inspect = util.inspect,
    async = require('async'),
    Hashmap = require('hashmap'),
    // db = require('./db/conn').db,
    log = require('./util/logger').log;

const hashmap = new Hashmap();

function SlackUtil(account) {
  this.account = account;
  this.close = false;
  this.adapter = null;
  this.fetching = false;
  this.needsFetch = false;
}

SlackUtil.stop = function(account, callback) {
  let obj = hashmap.get(account);


}

SlackUtil.start = function(account, callback) {
}

SlackUtil.restart = function(account, restart, callback) {
  log.info("Restarting the IMAP service");
  SlackUtil.stop(account, function() {
    var fetcher = new ImapUtil(account);
    fetcher.start(restart);
  });
}

SlackUtil.startWithDelay = function(account, delay, restart, callback) {
  log.info("Restarting in " + delay + " minutes");
  setTimeout(function() {
    /* don't start if there is already an instance */
    var fetcher = new SlackUtil(account);
    fetcher.start(restart);
  }, delay * 60 * 1000);
}

SlackUtil.restartWithDelay = function(account, delay, restart, callback) {
  log.info("Restarting in " + delay + " minutes");
  SlackUtil.stop(account, function() {
    setTimeout(function() {
      /* don't start if there is already an instance */
      var fetcher = hashmap.get(account);
      if (!fetcher) {
        fetcher = new ImapUtil(account);
        fetcher.start(restart);
      }
    }, delay * 60 * 1000);
  })
}

SlackUtil.prototype.start = function(account, callback) {
}


function slackConnect(account) {
  return new Imap({
    user: account.email,
    password: account.password,  //account.password, // utilModule.dcdeTextDBcm(account.password, utilModule.base64.decode(account.pwiv)),
    host: account.host,
    port: account.port,
    tls: account.tls
  });
}


module.exports = SlackUtil