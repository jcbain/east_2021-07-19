const promiseFunction = require('./promise_generator');

const resolvePromise = promiseFunction.resolvePromise;
const rejectPromise = promiseFunction.rejectPromise;


// error handling
resolvePromise("one", 200)
.then((data) => {
  console.log(data)

  return resolvePromise("two", 200)
})
.then((data) => {
  console.log(data)
  return rejectPromise("three", 200)
})
.then((data) => {
  console.log(data)
  console.log('someVar', someVar)
  return resolvePromise("four", 200)
})
.then((data) => console.log(data))
.catch(err => {
  console.log(err)
})
