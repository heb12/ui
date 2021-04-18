var bindings = {
	getVerses: function(reference, callback) {
		var requester;
		if (XMLHttpRequest) {
			requester = new XMLHttpRequest;
		} else {
			requester = new ActiveXObject("Microsoft.XMLHTTP");
		}

		requester.open("GET", "https://api.heb12.com/get/?reference=" + reference, true);
		requester.onreadystatechange = function() {
			if (requester.readyState == 4 && requester.status == 200) {
				callback(JSON.parse(requester.responseText));
			}
		};

		requester.send();
	}
}
