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
