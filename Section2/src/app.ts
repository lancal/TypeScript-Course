// let age: number;
// age = 30

// const userName = 'Alan';
// console.log(userName);

const button = document.querySelector('button')!;

button.addEventListener('click', () => {
    console.log('Clicked!');
});

function clickHandler(message: string) {
    // let userName = 'Max';
    console.log('Clicked! ' + message);
}
  // a comment
if (button) {
    button.addEventListener('click', clickHandler.bind(null, "You're welcome!"));
}
  

//const  map = new Map();