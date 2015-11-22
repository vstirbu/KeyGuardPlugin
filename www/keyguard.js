var exec = require('cordova/exec');
var channel = require('cordova/channel');

var _enabled = false;

Object.defineProperty(navigator, 'keyguard', {
  enumerable: true,
  get: function () {
    return _enabled;
  },
  set: function (enabled) {
    exec(function () {
      _enabled = enabled;
    }, function () {}, 'KeyGuard', 'set', [enabled]);
  }
});

channel.onCordovaReady.subscribe(function() {
  exec(function (enabled) {
    console.log(enabled);
    _enabled = enabled;
  }, function (err) {}, 'KeyGuard', 'enabled', []);
});

module.exports = navigator;
