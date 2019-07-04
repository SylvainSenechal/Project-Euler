'use strict';

const fs = require('fs')

let data = fs.readFileSync('p022_names.txt', 'utf8').split(',').map(name => name.slice(1, name.length-1)).sort();
let scores = new Uint32Array(data.length)

const computeScoreName = name => {
  let score = 0;
  [...name].forEach(letter => score += letter.charCodeAt() - 64)
  return score
}

data.forEach( (name, index) => {
  let score = computeScoreName(name) * (index + 1)
  scores[index] = score
})


let total = scores.reduce((acc, score) => acc + score)
console.log(total)
