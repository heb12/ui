var fs = require("fs");
var options = {encoding: "utf8", flag: "r"};
var contents = {
	mobile: {
		MENU_ICON: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABYklEQVR4Ae3XIWzCQBiG4YmKikq8mg8+OHwqEMjJyfNBICqQ+CCRFQi8QiAQlRMIBKISOVHx7xUTyyWXL/l3NRtv8jhCvpTrJbw8+y9N0eCAM27fTmixwitGrUTAHQZIH3hDgazVuMKcOsyQpQaWwYB3uCvQwjLbwtUGNgrHk1rCRjRgBtJV6MUBNU1+tkMB2Rrq99/ChKDPIVeCqMQDFsMRRHpUiF6OLnlPiebid1+oUQj4WYAliRt9B3OM8o0BVkh2gflGOcYALZLdYZ5RrjHACclMi0eJMdrNMUi8TeKgC3ck691j/KPOSNY5xwQsnKMOSLZ3jRFXgtAgWe0bA/+oKZJV+NSPNh4jR3XyQDsPZIjH6FHq+3QTPMQhNAUDjrCEK0roKMBGVkOn37gsGu//sBMssxbuysxPaoMCvy6Ig670WCJrE2yje0p5YI0Ko1Whxh4d+uiiu2CHOUo8+9t9AUcCWfVf/Xv1AAAAAElFTkSuQmCC",
		CLOSE_ICON: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAK0lEQVR4Ae3UoREAAAgDMfZfGjZAQkVyV/+qRSCgj7cTBN/8kKBs4IcEATB7U/sFHIey0AAAAABJRU5ErkJggg==",
		BINDING_SCRIPT: fs.readFileSync("js/mobile.js", options)
	},

	desktop: {

	},

	oldBrowser: {

	},

	newBrowser: {

	}
}

var option = "mobile";
// This script builds the HTML file

var parsed = fs.readFileSync("./reference.html", options)
var keys = Object.keys(contents[option]);
for (i in keys) {
	parsed = parsed.replace(keys[i], contents[option][keys[i]]);
}

fs.writeFileSync("./output.html", parsed);
