const promiseFunction = require('./promise_generator');

const resolvePromise = promiseFunction.resolvePromise;
const rejectPromise = promiseFunction.rejectPromise;

// how to run promises in parelel
const mulder = resolvePromise("burrito", 1000);
const scully = resolvePromise("bowl", 500);
const skinner = resolvePromise('chips and guac', 10);
// const james = rejectPromise("bowl of tomatoes", 200)

// once all promises resolve let me do something with the data
Promise.all([mulder, scully, skinner])
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })