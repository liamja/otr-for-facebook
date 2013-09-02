kango.console.log('main.js loaded');

function FBOTR() {
  var DSAKey = kango.storage.getItem("DSAKey");

  // Can't access properties using kango.invokeAsync
  // Use getters and setters instead.
  this.getDSAKey = function () {
    return this.DSAKey || kango.storage.getItem("DSAKey");
  };

  this.setDSAKey = function (key) {
    this.DSAKey = key;
    kango.storage.setItem("DSAKey", key);
  };

  this.importDSAKey = function (key) {
    this.DSAKey = JSON.parse(key);
  };

  this.exportDSAKey = function (key) {
    return JSON.stringify(this.DSAKey);
  };

  // Compute a new DSA key.
  // May hang the browser.
  this.generateDSAKey = function () {
    this.DSAKey = new DSA();
    this.setDSAKey(this.DSAKey);
  };
}

var FBOTR = new FBOTR();

// Handle button click
kango.ui.browserButton.addEventListener(kango.ui.browserButton.event.COMMAND, function (event) {
  kango.ui.optionsPage.open();
});
