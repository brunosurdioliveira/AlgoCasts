// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// SOLUTION A
// function anagrams(stringA, stringB) {
//     // remove ponctuation and spaces from string
//     const newStringA = stringA.replace('/[^\w]/g', "").toLowerCase();
//     const newStringB = stringB.replace('/[^\w]/g', "").toLowerCase();

//     // // create a map to save the stringA characters
//     // const strAMap = new Map();
//     // newStringA.split("").forEach((char) => {
//     //     if (strAMap.has(char)) {
//     //         const count = strAMap.get(char);
//     //         strAMap.set(char, count + 1);
//     //     } else {
//     //         strAMap.set(char, 1);
//     //     }
//     // });

//     // // create a map to save the stringB characters
//     // const strBMap = new Map();
//     // newStringB.split("").forEach((char) => {
//     //     if (strBMap.has(char)) {
//     //         const count = strBMap.get(char);
//     //         strBMap.set(char, count + 1);
//     //     } else {
//     //         strBMap.set(char, 1);
//     //     }
//     // });

//     // USING A HELPER FUNCTION
//     const strAMap = convertStringToMap(newStringA);
//     const strBMap = convertStringToMap(newStringB);

//     if (strAMap.size !== strBMap.size) {
//         return false;
//     }

//     for (let [key, value] of strAMap) {
//         const currentChar = strBMap.get(key);
//         if (currentChar !== value) {
//             return false;
//         }
//     }

//     return true;
// }

// SOLUTION B
function anagrams(stringA, stringB) {
    const newStringA = stringA.replace('/[^\w]/g', "").toLowerCase();
    const newStringB = stringB.replace('/[^\w]/g', "").toLowerCase();

    return newStringA.split("").sort().join("") === newStringB.split("").sort().join("");
}


// HELPER FUNCTION
function convertStringToMap(array) {
    const strMap = new Map();

    array.split("").forEach((char) => {
        if (strMap.has(char)) {
            const count = strMap.get(char);
            strMap.set(char, count + 1);
        } else {
            strMap.set(char, 1);
        }
    });

    return strMap;
}

module.exports = anagrams;
