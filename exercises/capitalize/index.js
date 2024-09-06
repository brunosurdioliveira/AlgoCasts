// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    // SOLUTION 01
    // const strArray = str.split(" ");

    // const mappedArray = strArray.map(string => {
    //     return string[0].toUpperCase() + string.slice(1);
    // });

    // return mappedArray.join(" ");

    // SOLUTION O2
    let result = "";

    for (let i = 0; i < str.length; i++) {
        const prevChar = str[i - 1];
        if (prevChar === " " || !prevChar) {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }

    return result;
}

module.exports = capitalize;
