//Clock shows h hours, m minutes and s seconds after midnight.
//
//	Your task is to write a function which returns the time since midnight in milliseconds.

// Solution:
//function past(h, m, s) {
//	return (h * 60 * 60 * 1000) + (m * 60 * 1000) + (s * 1000);
//}

function past(h, m, s) {
	let hours = h * 60 * 60 * 1000;
	let minutes = m * 60 * 1000;
	let seconds = s * 1000;

	return hours + minutes + seconds;
}