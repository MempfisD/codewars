//Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
//
//	Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Solution:
function maskify(cc) {
	if (cc.length <= 4) {
		return cc; // No need to mask if the string has 4 or fewer characters
	}

	const lastFourChars = cc.slice(-4); // Get the last four characters
	const maskedChars = '#'.repeat(cc.length - 4); // Create the masked characters using '#'

	return maskedChars + lastFourChars;
}