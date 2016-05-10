'use strict';

/*global chrome:false */

var numberPattern = /\d+((\.|\,)\d+)?/g;

findAndReplaceDOMText(document, {
	find: numberPattern,
	replace: function(portion) {
		let rounded = roundUp(portion.text);
		if (rounded == portion.text) {
			return portion.text;
		} else {
			let el = document.createElement('span');
			el.innerHTML = rounded + '<span style="color:gray">['+portion.text+']</span>';
			return el;
		}
	}
});
