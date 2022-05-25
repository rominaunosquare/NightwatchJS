//GET 1= https://tle.ivanstanojevic.me/api/tle/?search=CENTAURI-2
//GET 2= https://images-api.nasa.gov/asset/as11-40-5874 


var util = require('util'); //https://www.w3schools.com/nodejs/ref_util.asp
var events = require('events');

function testGet () {}
util.inherits(testGet, events.EventEmitter);

testGet.prototype.command = function(apiUrl, success) {
  var request = require("request");

  request.testGet(testGet, function (error, response) {
    if (error) {
      console.log(error);
      return;
    }

    success(response);
    this.emit('complete');
  }.bind(this));
};

module.exports = testGet;