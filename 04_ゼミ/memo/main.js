const input = document.getElementById("memo-input")
const button = document.getElementById("add-button")
const container = document.getElementById("memo-container")

button.onclick = function () {
  createCard(input.value)
  console.log(input.value)
}

const createCard = function (inputText) {
  const card = document.createElement("div")
  const text = document.createElement("div")
  text.className = "memoText"

  const deleteButton = document.createElement("button")
  deleteButton.textContent = "削除"
  deleteButton.onclick = function () {
    card.remove()
  }
  text.textContent = inputText
  card.append(text)
  card.append(deleteButton)
  container.append(card)
  input.value = null
}
