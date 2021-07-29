const promiseFunction = require('./promise_generator');

const resolvePromise = promiseFunction.resolvePromise;

const promise = resolvePromise("one", 500)
console.log("sync", promise)

promise.then((data) => {
    console.log(data)
    return resolvePromise("two", 1000)
  })
  .then((data) => {
    console.log(data)
    return resolvePromise("three", 2000)
  })
  .then((data) => {
    console.log(data)
    return resolvePromise("three", 2000)
  })
  .then((data) => {
    console.log(data)
  })

// console.log('i should still run first')

// promise2
//   .then((data) => {
//     console.log(data)
//   } )