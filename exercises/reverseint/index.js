// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    // My Solution:
    // const string = n.toString();
    // const reversed = string.split("").reduce((reversed, char) => {
    //     return char + reversed;
    // });
    // return n >= 0 ? parseInt(reversed) : -parseInt(reversed);

    const reversed = n.toString().split("").reverse().join("");

    return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
