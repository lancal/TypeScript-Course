const buttonTmp = document.querySelector("button")! as HTMLInputElement;
const inputTmp1 = document.getElementById("num1")! as HTMLInputElement;
const inputTmp2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

buttonTmp.addEventListener("click", function () {
  console.log(add(+inputTmp1.value, +inputTmp2.value));
});
