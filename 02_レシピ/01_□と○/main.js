const circleButton = document.getElementById("circle-button")
const squareButton = document.getElementById("square-button")
const obj = document.getElementById("figure")

// circleButton.onclick = function () {
//   obj.classList.add("rounded")
// }

// squareButton.onclick = function () {
//   obj.classList.remove("rounded")
// }
let isCircle = 0

obj.onclick = function () {
  switch (isCircle) {
    case 0:
      obj.classList.add("rounded")
      isCircle += 1
      break
    case 1:
      obj.classList.remove("rounded")
      obj.classList.remove("square")
      obj.classList.add("triangle")
      isCircle += 1
      break
    case 2:
      obj.classList.remove("triangle")
      obj.classList.add("square")
      isCircle = 0
      break
  }
}
