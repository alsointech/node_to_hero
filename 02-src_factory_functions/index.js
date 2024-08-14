// const { uuidv4 } = require('./plugins/uuid.plugin');
// const { getAge } = require('./plugins/get-age.plugin');
const { getAge, getUUID } = require('./plugins');

const buildMakePerson = () => {
    return ({ name, birthday }) => {
        return {
            id: getUUID(),
            name,
            birthday,
            age: getAge(birthday)
        }   
    }
}

const makePerson = buildMakePerson();
const person = makePerson({ name: 'Alejo', birthday: '1995-01-31' });
console.log(person);
