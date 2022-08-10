/*

    https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/count_factors/

    Count Factors
    Count factors of given number n.

    https://app.codility.com/demo/results/trainingBM656B-8HX/

*/

console.log('COUNT FACTORS');

function solution(N) {

    if (N === 1) {
        return 1;
    }

    let counter = 0;
    for (let i = 1; i <= N; i++) {
        if (N % i === 0) {
            counter++;
        }
    }

    return counter;
}




test(780291637)
// 2

test(1);
// // 1

test(7);
// // 2

test(24);
// 8

test(19);
// 2

test(1111);
// 4

test(4);
// 3

test(42);
// 8




function test(params) {
    console.log('\n(', params, ')\n');
    console.log('\n=>', solution(params), '\n\n');
}