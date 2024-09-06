// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    // MY SOLUTION
    // let result = [];
    // let tempArray = [];
    // let length = size;

    // array.forEach((element, idx) => {
    //     if (idx < size) {
    //         tempArray.push(element);
    //     } else if (idx === size) {
    //         size += length;
    //         result.push(tempArray);
    //         tempArray = [];
    //         tempArray.push(element);
    //     }
    // });

    // if (tempArray.length > 0) {
    //     result.push(tempArray);
    // }

    // return result;

    // SOLUTION NUMBER 2
    // const result = [];

    // for (let element of array) {
    //     // last element inside chucked array
    //     const lastElement = result[result.length - 1];

    //     if (!lastElement || lastElement.length === size) {
    //         result.push([element]);
    //     } else {
    //         lastElement.push(element);
    //     }
    // }

    // return result;

    // SOLUTION NUMBER 3 - SLICE
    const result = [];
    let index = 0

    while(index < array.length) {
        const tempArray = array.slice(index, index + size);
        result.push(tempArray);
        index += size;
    }

    return result;
}

module.exports = chunk;
