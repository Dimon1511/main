const btn = document.getElementById("para");
let numHolder = document.getElementById("resultNum");
let x = document.getElementById("numLow");
let y = document.getElementById("numDraw");
let a = document.getElementById("numMax");
btn.addEventListener("click", inputResult);
function inputResult() {
     numHolder.innerHTML = Math.max(+x.value, +y.value, +a.value);
}
