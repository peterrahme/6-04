let number = 0
let aBase = 0
let bBase = 0
let height = 0
document.getElementById('a').addEventListener('click',peter)

/* This code let's me enter dimensions of a trapezoid and gets its area*/
function peter () {
  aBase = document.getElementById('input').value
  bBase = document.getElementById('p').value
  height = document.getElementById('r').value
  aBase = parseInt(aBase)
  bBase = parseInt(bBase)
  height = parseInt(height)
  number = (aBase+bBase)/2 * height
  alert(number)
}
