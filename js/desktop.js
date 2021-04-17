var bindings = {
	getVerses: function(reference, callback) {
		callback(getVerses(reference).split("\n"));
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
