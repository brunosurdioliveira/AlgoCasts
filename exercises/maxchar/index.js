// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const strMap = new Map();
    str.split("").forEach((char) => {
        if (strMap.has(char)) {
            const count = strMap.get(char);
            strMap.set(char, count + 1);
            return;
        }

        strMap.set(char, 1)
    })

    let maxCharSize = 0;
    let maxCharFinal = "";

    // strMap.forEach((count, string) => {
    //     if (count > maxCharSize) {
    //         maxCharFinal = string;
    //         maxCharSize = count;
    //     }
    // });

    // for of (array, map)
    // for in (object)
    // Declara desse jeito
    for (let [char, count] of strMap) {
        if (count > maxCharSize) {
            maxCharFinal = char;
            maxCharSize = count;
        }
    }

    return maxCharFinal;
}

module.exports = maxChar;
