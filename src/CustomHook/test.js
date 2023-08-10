new Promise(function (resolve, reject) {
  setTimeout(resolve.bind(this, "hello"), 1000)
})
  .then(function (value) {
    console.log(value)
    return new Promise(function (resolve, reject) {
      setTimeout(resolve.bind(this, value + "1"), 1000)
    }).then(function (val) {
      console.log(val)
      return Promise.resolve("helloo")
    })
  })
  .then(function (value) {
    console.log("last one is " + value)
  })
