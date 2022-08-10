/*

    https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/min_perimeter_rectangle/

    Find the minimal perimeter of any rectangle whose area equals N.

*/

console.log('Min Perimeter Rectangle');

function solution(N) {

    let minDiff = 1000000000;
    let height = 1;
    let width = 1;
    for (let i = 1; i <= N; i++) {
        if (N % i === 0) {
            const y = N / i;
            const abs = Math.abs(y - i);
            if (abs < minDiff) {
                minDiff = abs;
                height = y;
                width = i;
            }
        }
    }

    return ( height + width) * 2;

}



test(1)
// 1

test(30)
// 22

// test(982451653)
// 


function test(params) {
    console.log('\n(', params, ')\n');
    console.log('\n=>', solution(params), '\n\n');
}