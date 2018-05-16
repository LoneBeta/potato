// preload.js
var _process = process;

process.once('loaded', function() {
  global.process= _process;
  
  window.externalModules = {
    dialog: require('electron').remote.dialog,
    menu: require('electron').remote.Menu,
    menuItem: require('electron').remote.MenuItem,
    fs: require('electron').remote.require('fs')
  }
});