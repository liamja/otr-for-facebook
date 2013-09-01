kango.console.log('main.js loaded');

// precompute your DSA key
var myKey = new DSA();
kango.storage.setItem("myKey", myKey);

// Handle button click
kango.ui.browserButton.addEventListener(kango.ui.browserButton.event.COMMAND, function(event) {
  kango.console.log('Button clicked');
  kango.ui.browserButton.setPopup({
    url: 'options.html',
    width: 640,
    height: 480
  });
});

