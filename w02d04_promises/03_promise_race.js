const promiseFunction = require('./promise_generator');

const resolvePromise = promiseFunction.resolvePromise;
const rejectPromise = promiseFunction.rejectPromise;

const generateRandomDelay = () => Math.floor(Math.random() * 5000)
// console.log(generateRandomDelay())
// console.log(generateRandomDelay())
// console.log(generateRandomDelay())
// console.log(generateRandomDelay())

const mulder = resolvePromise("burrito", generateRandomDelay());
const scully = resolvePromise("bowl", generateRandomDelay());
const skinner = resolvePromise('chips and guac', generateRandomDelay());
const james = rejectPromise('somehthin', 5000)

Promise.race([mulder, scully, skinner, james])
  .then((data) => {
    console.log(data)
  })
  .catch(err => {
    console.log(err)
  })