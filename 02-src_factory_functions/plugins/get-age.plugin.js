const getAgePlugin = require('get-age');

// if dependency is updated, in the future, we just need to update the adapter
const getAge = (birthday) => {
    if (!birthday) {
        throw new Error('birthday is required');
    }
  return getAgePlugin(birthday);
}

// exporst as an object
module.exports = { getAge };                                