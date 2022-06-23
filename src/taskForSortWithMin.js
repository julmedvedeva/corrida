// must return min positive value
// whom doesn't in arr or 1

function solution(A) {
  A = A.filter((x) => x >= 1).sort((a, b) => a - b);

  let x = 1;

  for (let i = 0; i < A.length; i++) {
    if (x < A[i]) {
      return x;
    }
    x = A[i] + 1;
  }

  return x;

}
const arr = [-1, -2, 1] // 2
const arr1 = [1, 2, 3, 6] // 4


console.log(solution(arr));
console.log(solution(arr1));
