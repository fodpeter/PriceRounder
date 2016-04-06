'use strict';

/*global chrome:false */

 $("body").append('Test2');

findAndReplaceDOMText(document, {
	find: /\d*9?/g,
	replace: function(portion) {
		var el = document.createElement('span');
		el.setAttribute('class', 'tooltip');
		el.innerHTML = (parseInt(portion.text)+1) + '<span class="tooltiptext" style="color:gray">['+portion.text+']</span>';
		return el;
	}
});
