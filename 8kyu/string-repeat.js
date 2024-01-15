// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Solution:
function repeatStr(n, s) {
//   return s.repeat(n);
	let result = '';
	for (let i = 0; i < n; i++) {
		result += s;
	}
	return result;
}