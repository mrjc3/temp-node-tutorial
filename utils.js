const names = require('./names')
const data = require('./alternativeFlavor')
require('./mindGrenade')
console.log(data.singlePerson)
console.log(data.items)


const sayHi = (name) => {
  console.log(`Hello there ${name}`)
}

sayHi(names.john)
sayHi(names.peter)
