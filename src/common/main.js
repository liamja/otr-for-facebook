function MyExtension() {
	var self = this;
	kango.ui.browserButton.addEventListener(kango.ui.browserButton.event.COMMAND, function() {
		kango.console.log('Button clicked!');
		self._onCommand();
	});
}

MyExtension.prototype = {

	_onCommand: function() {
		// precompute your DSA key
		var myKey = new DSA();
		kango.storage.setItem("myKey", myKey);
		var storedKey = kango.storage.getItem('myKey');
		kango.console.log('stored key is:\n' + storedKey);
	}
};

var extension = new MyExtension();
