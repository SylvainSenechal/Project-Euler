const generateTriangle = n => (n*(n+1)) / 2

// Call stack exceeded ...
// const nbDivisor = (triangleNb, n = triangleNb, acc = 0) => n === 0 ? acc : triangleNb % n === 0 ? nbDivisor(triangleNb, n-1, acc+=1) : nbDivisor(triangleNb, n-1, acc)

const nbDivisor = triangleNb => {
  let cpt = 0
  let n = triangleNb
  while (n !=0 ) {
    if (triangleNb % n === 0) cpt ++
    n--
  }
  return cpt
}

const findTriangle = n => {
  console.log(n)
  return nbDivisor(generateTriangle(n)) > 500 ? generateTriangle(n) : findTriangle(n+1)
}

console.log(findTriangle(12350))
