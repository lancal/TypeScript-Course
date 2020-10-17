// Code goes here!
//const userName = 'Alan';
// userName = 'Max';

// let age = 30;

// age = 29;

// function add(a: number, b:number ) {
//     let result;
//     result = a + b;
//     return result
// }

// let isOld;

// if(age > 20 ){
//     isOld = true;
// }

// console.log(isOld);

// const add = (a: number, b: number = 1) => a + b;

// const printOutput: (a: number | string) => void = output => console.log(output);

// const button = document.querySelector('button');

// if(button){
//     button.addEventListener('click', event => console.log(event));
// }

// printOutput(add(5));


const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies];

activeHobbies.push(...hobbies);

console.log(activeHobbies);

const person = {
    firstName: 'Alan',
    age: 123
};

const copiedPerson = {...person};

const add = (...numbers: number[]) => {
    return numbers.reduce((curResult,curValue) => {
        return curResult + curValue;
    }, 0);
};

const addedNumbers = add(5,10,2,3.7);
console.log(addedNumbers);


const [hobby1, hobby2,...remainingHobbies] = hobbies;

const [...remainingHobbies2] = hobbies;


console.log('results1: ' + hobbies,hobby1, hobby2);

console.log('results2: ' + hobbies,...remainingHobbies2);

const {firstName: userName, age} = person;

console.log('person: ' + userName,age,person);

