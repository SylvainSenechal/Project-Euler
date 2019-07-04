const sumPowDigits = (n, pow) =>
  Math.pow(
    n
    .toString()
    .split('')
    .map( digit => parseInt(digit))
    .reduce( (acc, digit) => acc + digit),
    pow
  )

const existSumDigits = n => {
  let cpt = 0
  let powN = sumPowDigits(n, cpt)

  while(powN < n) {
    cpt++
    let newPowN = sumPowDigits(n, cpt)
    if (newPowN === powN) return false // Gestion cas ou on fait une puissance de 1
    powN = sumPowDigits(n, cpt)
    if (powN === n) return true
  }
  return false
}

// console.log(sumPowDigits(614656, 0))
// console.log(existSumDigits(100))

const sequenceSumDigits = () => {
  let cpt = 0
  let n = 10
  while (cpt < 30) {
    // console.log(n)
    // console.log("cpt ", cpt)
    if (existSumDigits(n)) {
      console.log(n)
      cpt++
    }
    n++
  }
  return --n
}
console.log(sequenceSumDigits())
