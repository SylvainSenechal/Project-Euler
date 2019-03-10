const next = n => n % 2 === 0 ? n/2 : 3*n + 1
// Max stack exceeded ...
// const sequence = (n, acc = 1) => n === 1 ? acc : sequence(next(n), acc += 1)
const sequence = n => {
  let size = 1
  while (n != 1) {
    n = next(n)
    size++
  }
  return size
}

// Max stack exceeded ...
// const longuest = (n, length, startingNb) => {
//   let lengthNextSequence = sequence(n)
//   return n < 10000 ? lengthNextSequence > length ? longuest(n+1, lengthNextSequence, n) : longuest(n+1, length, startingNb) : startingNb
// }


const longuest = () => {
  let n = 1
  let maxLength = 1
  let startingNbMax = 1

  while (n != 1000000) {
    let lengthNextSequence = sequence(n)
    if (lengthNextSequence > maxLength) {
      maxLength = lengthNextSequence
      startingNbMax = n
    }
    n++
  }
  return startingNbMax
}
console.log(longuest(1, 1, 1))
