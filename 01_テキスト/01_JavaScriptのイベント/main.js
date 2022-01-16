const button = document.getElementById("button")

const alertMessage = function () {
  alert("クリックしたね！")
}
button.onclick = alertMessage

const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const sayHello = function () {
  console.log("hello")
}

const logValue = function (e) {
  console.log(e.target.value)
}

const logValue2 = function (e) {
  console.log(e)
}

inputText.oninput = logValue
inputDate.oninput = logValue2

inputText.onkeydown = function (e) {
  console.log(e.key)
}
