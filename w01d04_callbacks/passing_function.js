const sayHello = function(name) {
  const phrase = `Hello, ${name}`
  return phrase
}

const sayGoodBye = function(name) {
  const phrase = `Get out here, ${name}`
  return phrase
}

// const sayHi = sayHello;
// sayHi.weirdKey = "Jimbo"

const yellAtJames = function(someOtherFunction) {
  const phrase = someOtherFunction("James") // Hello, James
  const yelledPhrase = phrase.toUpperCase() // HELLO, JAMES
  return `${yelledPhrase}!!!!`
}

const yellAtSomeone = function(someOtherFunction, someone) {
  const phrase = someOtherFunction(someone) // Hello, James
  const yelledPhrase = phrase.toUpperCase() // HELLO, JAMES
  return `${yelledPhrase}!!!!`
}

const response = yellAtJames(sayHello)
const anotherResponse = yellAtJames(sayGoodBye)
const yelledAtPerson = yellAtSomeone(sayGoodBye, "Pete")
console.log(yelledAtPerson)
// console.log('response', response)
// console.log('anotherResponse', anotherResponse)