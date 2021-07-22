
const sayHello = function(name) {
  const phrase = `Hello, ${name}`
  return phrase
}

const yellAtJames = function(someOtherFunction) {
  const phrase = someOtherFunction("James") // Hello, James
  const yelledPhrase = phrase.toUpperCase() // HELLO, JAMES
  return `${yelledPhrase}!!!!`
}

const result = yellAtJames(sayHello);
console.log('result', result)

const anotherResult = yellAtJames(function(name){
  const phrase = `You are awesome, ${name}`
  return phrase;
})

console.log(anotherResult)

// const firstName = "Jennifer"
// const phrase = sayHello(firstName)
// const anotherPhrase = sayHello("Jennifer")
