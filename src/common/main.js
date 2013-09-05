kango.console.log('main.js loaded');

/**
 * Interface between Facebook and OTR
 * @constructor
 */
function FBOTR() {
  var DSAKey = kango.storage.getItem("DSAKey");

  /**
   * Can't access properties using kango.invokeAsync
   * Use getters and setters instead.
   * @returns {Object} DSA private key
   */
  this.getDSAKey = function () {
    return DSAKey;
  };

  /**
   * Set the DSA private key and save to long term storage.
   * @param {String} DSA private key.
   */
  this.setDSAKey = function (key) {
    DSAKey = key;
    kango.storage.setItem("DSAKey", key);
  };

  /**
   * Import a DSA private key and save to long term storage.
   * Intended to be retrieved from the user via a textbox.
   * @param {String} DSA private key as a string.
   */
  this.importDSAKey = function (key) {
    this.setDSAKey(JSON.parse(key));
  };

  /**
   * Export the DSA private key.
   * Intended to be presented to the user in a textbox.
   * @returns {String} DSA private key as a string.
   */
  this.exportDSAKey = function () {
    return JSON.stringify(DSAKey);
  };

  /**
   * Compute a new DSA key.
   * May hang the browser.
   */
  this.generateDSAKey = function () {
    this.DSAKey = new DSA();
    this.setDSAKey(this.DSAKey);
  };
}

var FBOTR = new FBOTR();

/** Handle button click */
kango.ui.browserButton.addEventListener(kango.ui.browserButton.event.COMMAND, function (event) {
  kango.ui.optionsPage.open();
});
