const number = 24

// n を 1 から、 number まで、 値を 1 ずつ増やしながら、 for の {} の中身を繰り返す
// for (let n = 1; n <= number; n++) {
//   // n を 3で割ったあまりが 0
//   if (n % 3 === 0) {
//     console.log(`${n}!!!!!!!`)
//   } else {
//     console.log(n)
//   }
// }

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
