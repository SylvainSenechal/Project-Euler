const palindromicNumber = val => {

  let max = 0
  for (let i = 999; i > 99; i--) {
    for (let j = 999; j > 99; j--) {
      let res = i*j
      res = res.toString()
      // console.log(res[0])
      if (res[0] === res[5] && res[1] === res[4] && res[2] === res[3] && res > max) max = res
    }
  }
  return max
}

console.log(palindromicNumber(998001))
