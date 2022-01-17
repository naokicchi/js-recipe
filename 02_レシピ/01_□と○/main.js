const circleButton = document.getElementById("circle-button")
const squareButton = document.getElementById("square-button")
const obj = document.getElementById("figure")

// circleButton.onclick = function () {
//   obj.classList.add("rounded")
// }

// squareButton.onclick = function () {
//   obj.classList.remove("rounded")
// }
let isCircle = false

obj.onclick = function () {
  if (!isCircle) {
    obj.classList.add("rounded")
    isCircle = true
  } else {
    obj.classList.remove("rounded")
    isCircle = false
  }
}
