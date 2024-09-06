// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// MY SOLUTION - prefiro essa
// function pyramid(n) {
//     // quantidade total de # na ultima linha
//     const pyramidLength = n + (n-1);

//     for(let i = 1; i <= n; i++) {
//         let tempLine = '';
//         // quantidade de # no level i 
//         const levelBlock = i + (i - 1);

//         // quantidade de espaços vazios que tem no level 1
//         let emptySpaces = pyramidLength - levelBlock;

//         // Divede por dois, sempre é um numero par, metade vai antes e metade vai depois
//         if (emptySpaces > 0) {
//             emptySpaces = emptySpaces/2;
//         }

//         tempLine += ' '.repeat(emptySpaces);
//         tempLine += '#'.repeat(levelBlock);
//         tempLine += ' '.repeat(emptySpaces);

//         console.log(tempLine);
//     }
// }

// function pyramid(n) {
//     // Encontre o midpoint 
//     const midpoint = Math.floor((n + (n-1))/2);

//     for (let row = 0; row < n; row++) {
//         let level = '';

//         // 2 * n - 1 total of # will have the last line
//         for (let column = 0; column < 2 * n - 1; column++) {
//             if (midpoint - row <= column && midpoint + row >= column) {
//                 level += '#';
//             } else {
//                 level += ' ';
//             }
//         }

//         console.log(level);
//     }
// }

// recursive solution
function pyramid(n, row = 0, level = '') {
    if (row === n) {
        return;
    }

    // lenght pyramid
    if (level.length === 2 * n - 1) {
        console.log(level);
        return pyramid(n, row + 1);
    }

    const midPointIndex = Math.floor((2 * n - 1) / 2);
    let add;

    if (midPointIndex - row <= level.length && midPointIndex + row >= level.length) {
        add = '#';
    } else {
        add = ' ';
    }

    pyramid(n, row, level + add);
}

module.exports = pyramid;
