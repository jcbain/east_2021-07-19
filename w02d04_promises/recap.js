// asynchronous control flow with callbacks

// console.log("(1) I should first")

// setTimeout(() => {
//   console.log('(2) hello there')
// }, 2000)

// console.log("(3) and I should still run before async code")

// emulates getting data from another source (database/ waiting api)
const getData = (callback) => {
  const runError = true;
  setTimeout(() => {
    const data = {
      weather: 'sunny'
    }

    if(!runError) {
      callback(null, data)
    } else {
      callback("Whoops and error occured", undefined)
    }

  }, 2000)
}
const handleData = (err, weatherData) => {
  if(err){
    return console.log(err)
  }
  console.log('my weather data is:', weatherData)
}

getData(handleData)