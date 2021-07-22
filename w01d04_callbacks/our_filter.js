const chickens = ['chicken', 'poulet', 'pollo', 'tavuk'];


// we want to create a higher order function that filters away values based off
// of some logical condition and retuns those that meet the condition in a new array

const ourFilter = (arr, callback) => {
  // create the array for the items that meet the condition
  const filteredArray = [];

  // iterate over the array
  for(const value of arr) {
    const meetsCondition = callback(value);
    
    if(meetsCondition === true) {
      filteredArray.push(value)
    }
  }
  return filteredArray;
}

const result = ourFilter(chickens, word => word.length > 5)
const anotherResult = ourFilter([1, 2, 3], val => val <= 2)
console.log(result)
console.log(anotherResult)