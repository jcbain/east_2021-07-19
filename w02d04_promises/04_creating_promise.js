// 

const promiseExample = new Promise((resolve, reject) => {
  // reject("An error occured")
  resolve("Woohooo, i resolved")

})

promiseExample
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })