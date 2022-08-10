/*

    CountTriangles
    Count the number of triangles that can be built from a given set of edges.

    https://app.codility.com/programmers/lessons/15-caterpillar_method/count_triangles/

*/

function solution(A) {
    let count = 0;
    A.sort((a, b) => b - a); // 降順に変更

    for (i of A) {
        for (let y = 1; y < A.length - i - 1; y++) {
            if (A[i] < A[y] + A[y + 1]) {
                count++;
            } else {
                break;
            }
        }
    }
    return count;
}



test([10, 2, 5, 1, 8, 12]);
// 4



function test(params) {
    console.log('\n(', params, ')\n');
    console.log('\n=>', solution(params), '\n\n');
}