"use strict";
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies];
activeHobbies.push(...hobbies);
console.log(activeHobbies);
const person = {
    firstName: 'Alan',
    age: 123
};
const copiedPerson = Object.assign({}, person);
const add = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
const [...remainingHobbies2] = hobbies;
console.log('results1: ' + hobbies, hobby1, hobby2);
console.log('results2: ' + hobbies, ...remainingHobbies2);
const { firstName: userName, age } = person;
console.log('person: ' + userName, age, person);
//# sourceMappingURL=app.js.map