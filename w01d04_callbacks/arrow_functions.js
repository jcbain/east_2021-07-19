
// function expressions
const sayHello = function(name) {
  const phrase = `Hello, ${name}`
  return phrase
}

const sayHi = (name) => {
  const phrase = `Hi, ${name}`
  return phrase
}

const result = sayHello('Larry')
const resultTwo = sayHi("Linda")
console.log('result', result)
console.log('resultTwo', resultTwo)

const sayGoodbye = name => {
  return `byeeee, ${name}`
}

const sayBye = name => `bye bye, ${name}`;

// console.log('sayBye', sayBye('James'))

// const person = {
//   name: "Charles",
//   sayBio: function(){ 
//     return `My name is ${this.name}`}
// }

// console.log(person.sayBio())

const yellAtJames = function(someOtherFunction) {
  const phrase = someOtherFunction("James") // Hello, James
  const yelledPhrase = phrase.toUpperCase() // HELLO, JAMES
  return `${yelledPhrase}!!!!`
}

const someOtherFunc = name => `Booo, ${name}`
const yelledResult = yellAtJames(name => `Booo, ${name}`)
const anotherResult = yellAtJames((someName) => {
  return `bloop, ${someName}`
})
yellAtJames(someOtherFunc)
console.log(yelledResult)
console.log(anotherResult)