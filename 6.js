const sumN = n => (n*(n+1)) / 2
const sumNsquare = n => ( n*(n+1)*(2*n+1) ) / 6
const squareOfsumN = n => sumN(n)*sumN(n)
const diffSumSquare = n => squareOfsumN(n) - sumNsquare(n)
console.log(sumN(10))
console.log(sumNsquare(10))
console.log(squareOfsumN(10))
console.log(diffSumSquare(10))
console.log(diffSumSquare(100))
