Vue.createApp({
  data() {
    return {
      inputMoney: 0,
      amountMoney: 0,
      records: [],
    }
  },
  computed: {
    enableClass: function () {
      let isTap = false
      if (this.inputMoney > this.amountMoney) {
        isTap = true
      }
      return isTap
    },
  },
  methods: {
    input: function () {
      this.amountMoney += Number(this.inputMoney)
      this.makeRecord("入金")
    },
    output: function () {
      this.amountMoney -= Number(this.inputMoney)
      this.makeRecord("出金")
    },
    makeRecord: function (play) {
      if (this.inputMoney !== "" && this.inputMoney !== 0) {
        const log = {
          date: new Date(),
          type: play,
          money: this.inputMoney,
        }
        this.records.push(log)
      }
    },
  },
}).mount("#atmApp")
