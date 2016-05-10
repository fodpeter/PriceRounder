'use strict';

function roundInt(num) {
	if (num%10==9) {
		return num+1;
	}
	return num;
}

function roundUp(text) {
	var num = parseInt(text);
	if (num == text) {
		if (num==0) {
			return text;
		}
		return roundInt(num);
	}
	num = parseFloat(text);
	var rounded = Math.ceil(num);
	if (rounded/num < 1.04) {
		return roundInt(rounded);
	}
	return text;
}