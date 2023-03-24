const btn = document.getElementById("Singlebtn");
let x = document.getElementById("numLow");
let y = document.getElementById("numDraw");
let a = document.getElementById("numMax");
btn.addEventListener("click", inputResult);
function inputResult() {
     Math.max(+x.value, +y.value, +a.value);
     console.log(Math.max);
}
