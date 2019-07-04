'use strict';

const sumSeries = nb => nb === 0 ? BigInt(0) : pow(nb, nb) + BigInt(sumSeries(nb - 1))
const pow = (nb, power) => power === 0 ? 1 : BigInt(pow(nb, power - 1)) * BigInt(nb)

console.log(sumSeries(1000).toString().slice(-10))
