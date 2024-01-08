// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// Solution:
const str = 'exit';
function removeChar(str) {
	return str.slice(1, -1);
}
console.log(removeChar(str));

// const removeChar = str => {
// 	return str.slice(1, -1);
// };
