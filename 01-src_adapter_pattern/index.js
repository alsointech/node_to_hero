// import { v4 as uuidv4 } from 'uuid';
const { uuidv4 } = require('./plugins/uuid.plugin');
const { getAge } = require('./plugins/get-age.plugin');


// factory functions
const person = {
  name: 'Alejo',
  birthday: '1995-01-31' 
}

const buildPerson = ({name, birthday}) => {
  return {
    id: uuidv4(),
    name,
    birthday,
    // age: new Date().getFullYear() - new Date(birthday).getFullYear(), // not the right way
    age: getAge(birthday)
  }
}

const realPerson = buildPerson(person);
console.log(realPerson);

const pablo = buildPerson({name: 'Pablo', birthday: '2004-01-09'});
console.log(pablo);