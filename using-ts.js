var buttonTmp = document.querySelector('button');
var inputTmp1 = document.getElementById('num1');
var inputTmp2 = document.getElementById('num2');
function add(num1, num2) {
    return num1 + num2;
}
buttonTmp.addEventListener('click', function () {
    console.log(add(+inputTmp1.value, +inputTmp2.value));
});
