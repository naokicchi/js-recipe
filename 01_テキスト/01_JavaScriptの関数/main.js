// 練習問題 １
const plus1 = function (x) {
  return x + 1
}
// 関数名: plus1
// 引数: x
// 返り値: x+1

// 練習問題 ２
// f1: 1, 4, 7, 10, 13, 16, ...
const f1 = function (x) {
  return 1 + (x - 1) * 3
}
// f2: 1, 10, 100, 1000, 10000, ...
const f2 = function (x) {
  return 10 ** (x - 1)
}

// f3: 2, 14, 107, 1010, 10013, ...

const f3 = function (x) {
  return f1(x) + f2(x)
}
// 練習問題３
// ① ２つの引数を受け取り、それらをかけ合わせた値を返す関数 multiply
const multiply = function (x, y) {
  return x * y
}
// ② ２つの引数を受け取り、それらを足し合わせた結果を四捨五入した値を返す関数 plusRound
const plusRound = function (x, y) {
  return Math.round(x + y)
}

const seisekibo = [
  { name: "とーや", taiiku: 1, bijutsu: 5, doutoku: 5 },
  { name: "りょーた", taiiku: 3, bijutsu: 3, doutoku: 3 },
  { name: "やすなり", taiiku: 5, bijutsu: 5, doutoku: 1 },
]
const undoudekiruSeito = seisekibo.filter((seito) => {
  return seito.taiiku >= 3
})
