var ret = 0;

var bindings = {
	getVerses: function(reference, callback) {
		// I think there is a better way to do
		// this with some new thing called "promises"
		// But this stuff will do for now
		getVerses(reference);
		var wait = setInterval(function() {
			if (ret != 0) {
				clearInterval(wait);
				callback(ret.split("\n"));
				ret = 0;
			}
		}, 1);
	},

	loadTranslation: function(name) {
		loadTranslation(
			"bibles/" + name + ".i",
			"bibles/" + name + ".t"
		);
	},

	loadConfiguration: function() {

	}
}
