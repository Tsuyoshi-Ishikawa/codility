/*

    https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_slice_sum/

    Find a maximum sum of a compact subsequence of array elements.

*/

console.log('MAX SLICE SUM');

// function solution(A) {

//     let maxTotal = A[0];
//     let sum = 0

//     for (var i = 0; i < A.length; i++) {
//         console.log(A[i])
//         sum = 0;
//         for (var j = i; j < A.length; j++) {
//             sum += A[j];
//             if (sum > maxTotal) {
//                 maxTotal = sum;
//                 // console.log('maxTotal:', maxTotal)
//             }
//             console.log('A[j]:', A[j])
//             // console.log('sum:', sum)            
//             // console.log('...')
//         }

//         console.log('---------')

//     }


//     return maxTotal;
// }




function solution(A) {

    let sum = -1000000;
    let total = -1000000;
    let i = 0;

    while (i < A.length) {

        sum = Math.max(A[i], sum + A[i]);
        total = Math.max(sum, total);

        i++;

        console.log('----');

    }

    return total;
}

function test(...params) {
    console.log('\n(', ...params, ')\n');
    console.log('\n=>', solution(...params), '\n\n');
}


test([3, 2, -6, 4, 0]);
// 5

test([3, 2, -6, 4, 10]);
// 14

test([-10]);
// -10

test([-10, -11]);
// -10

// test([1, 1, -2])
// 2

// test([-2, -4, -1, -5, -3]);
// -2


// test([-2, 1])
// 1


// 最終的な返り値が必ず正の数になる場合はこれも使える。
function solution_v2(A) {
    let sum = 0;
    let total = 0;
    let i = 0;

    while (i < A.length) {
        let temp = sum + A[i];
        if (A[i] < temp) {
            sum = temp;
        } else {
            sum = A[i];
        }

        if (total < sum) {
            total = sum;
        }
        i++;
    }

    return total;
}

function test_v2(...params) {
    console.log('\n(', ...params, ')\n');
    console.log('\n=>', solution_v2(...params), '\n\n');
}

test_v2([3, 2, -6, 4, 0]);
// 5

test_v2([3, 2, -6, 4, 10]);
// 14

test_v2([-10]);
// -10ではなく0になってしまう

test_v2([-10, -11]);
// -10ではなく0になってしまう
