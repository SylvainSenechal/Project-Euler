const pow = n => BigInt(Math.pow(2, n))

let res = pow(1000).toString().slice(2)

let resultat = res.split("").reduce( (acc, value) => parseInt(acc) + parseInt(value)) + 1

console.log(resultat)
