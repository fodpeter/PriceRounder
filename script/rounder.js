'use strict';

function roundUp(text) {
	var num = parseInt(text);
	if (num == text) {
		if (num==0) {
			return text;
		}
		if (num%10==9) {
			return num+1;
		}
	}
	num = parseFloat(text);
	var rounded = Math.ceil(num);
	if (rounded/num < 1.04) {
		return rounded;
	}
	return text;
}