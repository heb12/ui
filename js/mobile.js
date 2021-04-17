var bindings = {
	getVerses: function(reference, callback) {
		callback(b.getVerses(reference).split("\n"));
	},

	loadTranslation: function(name) {
		b.loadTranslation(
			"/sdcard/heb12data/" + name + ".i",
			"/sdcard/heb12data/" + name + ".t"
		);
	},

	loadConfiguration: function() {

	}
}
