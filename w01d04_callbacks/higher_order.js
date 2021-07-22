const chickens = ['chicken', 'poulet', 'pollo', 'tavuk'];

// for(const value of chickens) {
//   console.log('This is how you say chicken:', value)
// }
const sayChicken = (word) => {
  console.log('This is how you say chicken:',  word)
}

// for(const value of chickens) {
//   sayChicken(value)
// }

const loopOverArray = (arr, callback) => {
  for(const value of arr){
    callback(value) 
  }
}

// loopOverArray(chickens, sayChicken)

// loopOverArray(chickens, () => console.log('blah blah blah'))

// chickens.forEach(sayChicken)