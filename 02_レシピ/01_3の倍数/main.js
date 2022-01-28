const genkiFunction = function (number) {
  // n を 1 から、 number まで、 値を 1 ずつ増やしながら、 for の {} の中身を繰り返す
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      console.log(`${n}!!!!!!!`)
    } else {
      console.log(n)
    }
  }
}

const fizzBuzz = function (number) {
  // n を 1 から、 number まで、 値を 1 ずつ増やしながら、 for の {} の中身を繰り返す
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0 && n % 5 === 0) {
      console.log(`fizzBuzz`)
    } else if (n % 3 === 0) {
      console.log("fizz")
    } else if (n % 5 === 0) {
      console.log("buzz")
    } else {
      console.log(n)
    }
  }
}

const like_three = function (number) {
  for (let n = 1; n <= number; n++) {
    if (String(n).match("3")) {
      console.log(`${n}!!!!!!!!!`)
    } else {
      console.log(n)
    }
  }
}
let count = 0
let maxValue = 0

const timerId = function (number) {
  maxValue = number
  //setIntervalの引数の関数は引数をもつことができない説？？？？？？
  setInterval(judgeNumber, 1000)
}

const judgeNumber = function () {
  count += 1
  if (count > maxValue) {
    //setIntervalを停止
    clearInterval(timerId)
  } else {
    if (count % 3 === 0) {
      console.log(`${count}!!!!!!!!!`)
    } else {
      console.log(count)
    }
  }
}
