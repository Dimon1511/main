let canvas = document.querySelector(".canvas")
let context = canvas.getContext("2d")

var mouseXblock = 0
var mouseYblock = 0

canvas.addEventListener("click", function(event){
  var mouseX = event.pageX
  var mouseY = event.clientY
  var block = document.querySelector(".canvas")
  var blockRectangle = block.getBoundingClientRect()
  var blockX = blockRectangle.left
  var blockY = blockRectangle.top
  mouseXblock = mouseX - blockX - 25
  mouseYblock = mouseY - blockY - 25
})

let ball = new Image()
ball.src = "../img/foot_ball.png"

canvas.width = 720
canvas.height = 220

function draw(){
  context.fillStyle = "green"
  context.fillRect(0, 0, 720, 720)
  context.drawImage(ball, mouseXblock, mouseYblock)
  if(mouseXblock > 0){
    context.fillStyle = "green"
    context.fillRect(0, 0, 720, 720)
    context.drawImage(ball, mouseXblock, mouseYblock)
  }
}
setInterval(draw, 30)