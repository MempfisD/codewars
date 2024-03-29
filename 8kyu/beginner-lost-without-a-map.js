//Given an array of integers, return a new array with each value doubled.
//
//	For example:
//
//	[1, 2, 3] --> [2, 4, 6]



// Solution:
function maps(x) {
	let double = [];
	for (let i = 0; i < x.length; i++) {
		double.push(x[i] * 2);
	}
	return double;

}

function maps(x) {
	return x.map(n => n * 2);
}