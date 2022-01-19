// const container = document.getElementById("cards-container")
// const addButton = document.getElementById("c")
// const input = document.getElementById("input-todo")
// //const containers = document.getElementsByClassName("cards-container")

// addButton.onclick = function () {
//   const card = createCard(input.value)
//   container.append(card)

//   input.value = ""
// }

// //参考記事
// //https://rurukblog.com/post/Javascript-enter-event/
// input.onkeydown = function (event) {
//   if (event.key === "Enter") {
//     const card = createCard(input.value)
//     container.append(card)
//     input.value = ""
//   }
// }

const createCard = function (text) {
  const card = document.createElement("div")
  card.className = "card"

  const toDo = document.createElement("div")
  toDo.className = "toDo"
  toDo.textContent = text

  card.append(toDo)

  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  deleteButton.onclick = function () {
    card.remove()
  }
  card.append(deleteButton)

  return card
}

const containers = document.getElementsByClassName("cards-container")
const footer = document.getElementsByClassName("list-footer")

const inputDiv = document.createElement("div")
inputDiv.classList.add("input-container")
const inputField = document.createElement("input")

inputField.type = "text"
inputField.className = "input-todo"

inputField.onkeydown = function (event) {
  if (event.key === "Enter") {
    const card = createCard(inputField.value)
    containers[selectedFooterTag].append(card)
    inputField.value = ""
  }
}

const addButton = document.createElement("div")
addButton.className = "input-button"
addButton.textContent = "追加"
addButton.onclick = function () {
  const card = createCard(inputField.value)
  containers[selectedFooterTag].append(card)
  inputField.value = ""
}

inputDiv.append(inputField)
inputDiv.append(addButton)

let selectedFooterTag = 0

for (let i = 0; i < footer.length; i++) {
  footer[i].addEventListener("mouseover", function () {
    //onsole.log(i)
    footer[i].append(inputDiv)
    selectedFooterTag = i
  })
}
for (let i = 0; i < footer.length; i++) {
  footer[i].addEventListener("mouseout", function () {
    if (i !== selectedFooterTag) {
      inputField.value = ""
    }
    selectedFooterTag = i
  })
}
