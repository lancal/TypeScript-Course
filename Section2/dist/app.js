"use strict";
const button = document.querySelector('button');
button.addEventListener('click', () => {
    console.log('Clicked!');
});
function clickHandler(message) {
    console.log('Clicked! ' + message);
}
if (button) {
    button.addEventListener('click', clickHandler.bind(null, "You're welcome!"));
}
//# sourceMappingURL=app.js.map