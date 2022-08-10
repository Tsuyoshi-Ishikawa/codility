/*

    AbsDistinct
    Compute number of distinct absolute values of sorted array elements.

    https://app.codility.com/programmers/lessons/15-caterpillar_method/abs_distinct/

*/

console.log('Abs Distinct');

function solution(N) {
  const absMap = new Map;
  for (i of N) {
    const absI = Math.abs(i);
    absMap.set(absI, absI);
  }
  return absMap.size;
}

test([5, 3, -1, 0, 3, 6]);
// 5

function test(params) {
  console.log('\n(', params, ')\n');
  console.log('\n=>', solution(params), '\n\n');
}