// key value pairs

const firstName = "James";


const sayHello = function(name) {
  const phrase = `Hello, ${name}`
  console.log(phrase);
  return phrase
}

// sayHello(firstName) 

const yourName = firstName;
// console.log('yourName', yourName)

// const sayHi = sayHello("Lisa");
// console.log('sayHi', sayHi)

const sayHi = sayHello;
sayHi("Leonard")

const addTwo = function(num) {
  return num + 2
}

const subtractTwo = function(num) {
  return num - 2
}

const mathFunctions = [addTwo, subtractTwo];
console.log('mathFunctions', mathFunctions)

