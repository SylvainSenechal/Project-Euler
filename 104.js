'use strict';
// !! BIGINT => USE WITH NODE OR CHROME LATEST VERSION

// const fibRec = n => n > 1 ? fibRec(n - 1) + fibRec(n - 2) : n === 1 ? 1 : 0
const tailFibonacci = (n, a = BigInt(0), b = BigInt(1)) => n > 0 ? tailFibonacci(n - 1, b, a + b) : a

const pandigitalFirst = numbers => [1, 2, 3, 4, 5, 6, 7, 8, 9].filter( digit => !numbers.includes(digit) ).length === 0
const pandigitalLast = numbers => [1, 2, 3, 4, 5, 6, 7, 8, 9].filter( digit => !numbers.includes(digit) ).length === 0


// CALL STACK SIZE EXCEEDED
// const findDoublePandigital = n => {
//   let result = tailFibonacci(n)
//   let first = result.toString().slice(0, 9).split('').map( digit => parseInt(digit))
//   let last = result.toString().slice(-9).split('').map( digit => parseInt(digit))
//   console.log(n)
//   pandigitalFirst(first) && pandigitalLast(last) ? n : findDoublePandigital(n+1)
// }
// console.log(findDoublePandigital(0))


// CALL STACK SIZE EXCEEDED
// const findDoublePandigital = n => {
//   let found = false
//   while (!found) {
//     console.log(n)
//
//     let result = tailFibonacci(n)
//     let first = result.toString().slice(0, 9).split('').map( digit => parseInt(digit))
//     let last = result.toString().slice(-9).split('').map( digit => parseInt(digit))
//
//     pandigitalFirst(first) && pandigitalLast(last) ? found = true : n++
//   }
// }
// console.log(findDoublePandigital(0))


// TEST MEMOIZATION
// let memo = {
//   "0": BigInt(0),
//   "1": BigInt(1)
// }
// const fiboMemo = (n, a = BigInt(0), b = BigInt(1)) => {
//
//   if (memo[n] != undefined) return memo[n]
//   else {
//     let fib1
//     let fib2
//     if (memo[n-1] != undefined) fib1 = memo[n-1]
//     else fib1 = fiboMemo(n-1)
//     if (memo[n-2] != undefined) fib2 = memo[n-2]
//     else fib2 = fiboMemo(n-2)
//
//     memo[n] = fib1 + fib2
//     return fib1 + fib2
//   }
// }
//
// console.log(fiboMemo(5000))
