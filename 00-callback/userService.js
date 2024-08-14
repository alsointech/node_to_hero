const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Jim' },
]

const getUserById = ((id, callback) => {
  const user = users.find(user => user.id === id)
  // callback(user)
  if (user) {
    return callback(null, user)
  } else {
    return callback(new Error('User not found with id: ' + id))
  }
});

module.exports = {
  getUserById,
}