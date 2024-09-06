// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// RECURSIVE SOLUTION - MEMOIZATION
function slowFib(n) {
    if (n < 2) {
        return n;
    }

    return fib(n - 2) + fib(n - 1);
}

function memo(fn) {
    // cache to save eache fib call
    const cache = {};

    return function(...args) {
        if(cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;
        return result;
    }

}

const fib = memo(slowFib);

// function memoize(fn) {
//     const cache = {};

//     return function(...args) {
//         if (cache[args]) {
//             return cache[args];
//         }

//         const result = fn.apply(this, args);
//         cache[args] = result;

//         return result;
//     }
// }

// function slowFib(n) {
//     if (n < 2) {
//         return n;
//     }

//     return fib(n-1) + fib(n-2);
// }

// const fib = memoize(slowFib);

// // RECURSIVE SOLUTION
// function fib(n) {
//     if (n < 2) {
//         return n;
//     }

//     return fib(n-1) + fib(n-2);
// }

// function fib(n) {
//     const result = [];
//     for(let i = 0; i <= n; i++) {
//         if (i === 0 || i === 1) {
//             result.push(i);
//         } else {
//             let temp = result[i - 2] + result[i - 1];
//             result.push(temp);
//         }
//     }

//     return result[n];
// }

module.exports = fib;
