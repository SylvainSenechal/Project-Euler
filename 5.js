'use strict';
// problem maximum call
// const evenDivisible = n => {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
//   arr.filter( elem => (n % elem) != 0).length === 0 ? n : evenDivisible(n+1)
// }

const evenDivisible = () => {
  let found = false
  let n = 1
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  while (!found) {
    arr.filter( elem => (n % elem) != 0).length === 0 ? found = true : n++
  }
  return n
}

console.log(evenDivisible())
