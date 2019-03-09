let check = (a, b, c) => a + b + c === 1000 && Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)  ? true : false

for (let a = 0; a < 999; a++) {
  for (let b = a + 1; b < 1000; b++) {
    let c = 1000 - b - a
    // check(a, b, c) === true ? break; : continue;
    if (check(a, b, c)) {
      console.log("a: ", a, "b: ", b, "c: ", c)
      console.log(a*b*c)
      break
    }
  }
}
