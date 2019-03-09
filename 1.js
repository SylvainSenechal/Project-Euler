let arr = Array(1000).fill().map( (_, index) => index)
let res = arr.reduce( (acc, val) => {
  if (val % 3 === 0 || val % 5 === 0) return acc + val
  return acc
})

console.log(res)
