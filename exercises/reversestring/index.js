// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // My Solution:
    // let result = "";
    // for (let i = (str.length - 1); i >= 0; i--) {
    //     result += str.charAt(i);
    // }
    // return result;

    // Cheat version, converting to array, using reverse and join it again.
    // const arrayFromString = str.split("");
    // arrayFromString.reverse();
    // return arrayFromString.join("");

    // Solution 2
    // let reversed = '';
    // for (let char of str) {
    //     reversed = char + reversed;
    // }
    // return reversed;

    // Solution 3 - using forEach
    // convert to array
    // const array = str.split("");
    // let response = "";
    // array.forEach(char => {
    //     response = char + response;
    // });
    // return response;

    //  Reduce
    return str.split("").reduce((reversed, char) => {
        return char + reversed;
    }, "");
}

module.exports = reverse;
