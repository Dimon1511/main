let Numdivide = document.getElementById("divide");
let Numminus = document.getElementById("minus");
let Nummultiply = document.getElementById("multiply");
let Numplus = document.getElementById("plus");
let Numequal = document.getElementById("equal");
let num1 = document.getElementById("read1");
let num2 = document.getElementById("read2");
let Inputequal = document.getElementById("resultNum");
var symbol;
Numdivide.addEventListener("click", function () {
  symbol = "/";
});
Numminus.addEventListener("click", function () {
  symbol = "-";
});
Nummultiply.addEventListener("click", function () {
  symbol = "*";
});
Numplus.addEventListener("click", function () {
  symbol = "+";
});
Numequal.addEventListener("click", function () {
  switch (symbol) {
    case "*":
      Inputequal.value = +num1.value * +num2.value;
      break;
    case "/":
      Inputequal.value = +num1.value / +num2.value;
      break;
    case "+":
      Inputequal.value = +num1.value + +num2.value;
      break;
    case "-":
      Inputequal.value = +num1.value - +num2.value;
      break;
  }
});
