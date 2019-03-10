const nbLetters = {
  "one": 3*(9*10+100+1),
  "two": 3*(9*10+100),
  "three": 5*(9*10+100),
  "four": 4*(9*10+100),
  "five": 4*(9*10+100),
  "six": 3*(9*10+100),
  "seven": 5*(9*10+100),
  "eight": 5*(9*10+100),
  "nine": 4*(9*10+100),

  "ten": 3*10,
  "twenty": 6*(10*10),
  "thirty": 6*(10*10),
  "forty": 5*(10*10),
  "fifty": 5*(10*10),
  "sixty": 5*(10*10),
  "seventy": 7*(10*10),
  "eighty": 6*(10*10),
  "ninety": 6*(10*10),

  "eleven": 6*10,
  "twelve": 6*10,
  "thirteen": 8*10,
  "fourteen": 8*10,
  "fifteen": 7*10,
  "sixteen": 7*10,
  "seventeen": 9*10,
  "eighteen": 8*10,
  "nineteen": 8*10,

  "and": 3*(99*9),

  "hundred": 7*900,
  "thousand": 8*1
}

const sum = obj => Object.values(obj).reduce( (acc, value) => acc + value)
console.log(sum(nbLetters))
