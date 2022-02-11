//Make circle follow mouse
const circle = document.getElementsByClassName('cursor')[0];
const body = document.getElementById('body');
let mouseX = 0,
  mouseY = 0;
let xPosition = 0,
  yPosition = 0;

body.addEventListener('mousemove', function (event) {
  getMousePos(event);
});

function getMousePos(e) {
  mouseX = e.clientX - 40;
  mouseY = e.clientY - 40;
}

setInterval(function () {
  xPosition += (mouseX - xPosition) / 6;
  yPosition += (mouseY - yPosition) / 6;
  circle.style.left = xPosition + 'px';
  circle.style.top = yPosition + 'px';
}, 20);

//Clears Input on page refresh
var inputs = document.getElementsByTagName('input');
for (i = 0; i < inputs.length; i++) {
  inputs[i].value = '';
}
