const sumEvenFibonacci = (acc, v1, v2, bound) => {
  let nextValue = v1 + v2
  if (nextValue > bound) return acc
  else {
    return sumEvenFibonacci(acc + (nextValue % 2 === 0 ? nextValue:0), v2, nextValue, bound)
  }
}

console.log(sumEvenFibonacci(2, 1, 2, 4000000))
