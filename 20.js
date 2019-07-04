// const factorial = n => n === 1 ? 1 : n*factorial(n-BigInt(1))

const tailFact = (n, acc = BigInt(1)) => n == 1 ? acc : tailFact(n - BigInt(1), acc*n)

let results = tailFact(BigInt(100))
  .toString()
  .split('')
  .map( digit => parseInt(digit))
  .reduce( (acc, value) => acc + value )

console.log(results)
