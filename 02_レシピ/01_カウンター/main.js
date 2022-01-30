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
const kigou = document.getElementsByClassName("kigou")

let calc_string = String()
let isLastNumber = true

const check = function () {
  for (let i = 0; i < 10; i++) {
    if (calc_string.slice(-1) != i) {
      console.log(false, "24")
      isLastNumber = false
      equal.disabled = true
    } else {
      console.log(true, "27")
      isLastNumber = true
      equal.disabled = false
      return
    }
  }
}

if (calc_string.length === 0) {
  kigou.disabled = true
}

ichi.onclick = function () {
  calc_string += 1
  check()
  console.log(calc_string)
  ansLabel.textContent = calc_string
}

ni.onclick = function () {
  calc_string += 2
  check()
  console.log(calc_string)
  ansLabel.textContent = calc_string
}

san.onclick = function () {
  calc_string += 3
  check()
  console.log(calc_string)
  ansLabel.textContent = calc_string
}
yon.onclick = function () {
  calc_string += 4
  check()
  console.log(calc_string)
  ansLabel.textContent = calc_string
}

go.onclick = function () {
  calc_string += 5
  check()
  console.log(calc_string)
  ansLabel.textContent = calc_string
}
roku.onclick = function () {
  calc_string += 6
  check()
  console.log(calc_string)
  ansLabel.textContent = calc_string
}
nana.onclick = function () {
  calc_string += 7
  check()
  console.log(calc_string)
  ansLabel.textContent = calc_string
}
hachi.onclick = function () {
  calc_string += 8
  check()
  console.log(calc_string)
  ansLabel.textContent = calc_string
}

kyuu.onclick = function () {
  calc_string += 9
  check()
  console.log(calc_string)
  ansLabel.textContent = calc_string
}

kakeru.onclick = function () {
  if (isLastNumber === true) {
    calc_string += "*"
  }
  check()
  console.log(calc_string)
  ansLabel.textContent = calc_string
}
mainasu.onclick = function () {
  if (isLastNumber === true) {
    calc_string += "-"
  }
  check()
  console.log(calc_string)
  ansLabel.textContent = calc_string
}
purasu.onclick = function () {
  if (isLastNumber === true) {
    calc_string += "+"
  }
  check()
  console.log(calc_string)
  ansLabel.textContent = calc_string
}
waru.onclick = function () {
  if (isLastNumber === true) {
    calc_string += "/"
  }
  check()
  ansLabel.textContent = calc_string
  console.log(calc_string)
}
ac.onclick = function () {
  calc_string = String()
  isLastNumber = false
  console.log(calc_string)
  ansLabel.textContent = 0
  equal.disabled = true
}
equal.onclick = function () {
  //ans = eval(calc_string)
  let result = Function("return (" + calc_string + ");")()
  console.log(result, "result")
  ansLabel.textContent = result
}
