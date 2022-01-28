const ichi = document.getElementById("1")
const ni = document.getElementById("2")
const san = document.getElementById("3")
const yon = document.getElementById("4")
const go = document.getElementById("5")
const roku = document.getElementById("6")
const nana = document.getElementById("7")
const hachi = document.getElementById("8")
const kyuu = document.getElementById("9")
const kakeru = document.getElementById("kakeru")
const mainasu = document.getElementById("-")
const purasu = document.getElementById("+")
const waru = document.getElementById("waru")
const ac = document.getElementById("ac")
const equal = document.getElementById("equal")
const ansLabel = document.getElementById("answer")

let ans = 0
var calc_string = ""
//var result = Function("return (" + calc_string + ");")()

//答え更新する関数

//ansLabel.textContent = 0

ichi.onclick = function () {
  calc_string += 1
  console.log(calc_string)
}
ni.onclick = function () {
  calc_string += 2
  console.log(calc_string)
}
san.onclick = function () {
  calc_string += 3
  console.log(calc_string)
}
yon.onclick = function () {
  calc_string += 4
  console.log(calc_string)
}

go.onclick = function () {
  calc_string += 5
  console.log(calc_string)
}
roku.onclick = function () {
  calc_string += 6
  console.log(calc_string)
}
nana.onclick = function () {
  calc_string += 7
  console.log(calc_string)
}
hachi.onclick = function () {
  calc_string += 8
  console.log(calc_string)
}

kyuu.onclick = function () {
  calc_string += 9
  console.log(calc_string)
}

kakeru.onclick = function () {
  calc_string += "*"
  console.log(calc_string)
}
mainasu.onclick = function () {
  calc_string += "-"
  console.log(calc_string)
}
purasu.onclick = function () {
  calc_string += "+"
  console.log(calc_string)
}
waru.onclick = function () {
  calc_string += "/"
  console.log(calc_string)
}
ac.onclick = function () {
  calc_string = ""
  console.log(calc_string)
  ansLabel.textContent = 0
}
equal.onclick = function () {
  //ans = eval(calc_string)
  let result = Function("return (" + calc_string + ");")()
  console.log(result, "result")
  ansLabel.textContent = result
}
