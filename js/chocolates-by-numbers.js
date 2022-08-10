/*

    ChocolatesByNumbers
    There are N chocolates in a circle. Count the number of chocolates you will eat.

    https://app.codility.com/programmers/lessons/12-euclidean_algorithm/chocolates_by_numbers/

*/

function solution(N, M) {
    const eatenChoco = {};
    let position = 0;
    let count = 0;
    
    while (eatenChoco[position] !== true) {
        eatenChoco[position] = true;
        position = (position + M) % N;
        count++;
    }
    return count;
}



test(10, 4);
// 5

test(20, 5);
// 4

test(24, 18);
// 4


function test(...params) {
    console.log('\n(', ...params, ')\n');
    console.log('\n=>', solution(...params), '\n\n');
}