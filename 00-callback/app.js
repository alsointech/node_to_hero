const { getUserById } = require('./userService')

getUserById(10, (err, user) => {
  if (err) {
    throw new Error(err)
  } else {
    console.log(user)
  }
})
