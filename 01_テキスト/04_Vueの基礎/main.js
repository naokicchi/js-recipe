const count = {
  data() {
    return {
      count: 10,
    }
  },
  methods: {
    countUp: function () {
      this.count += 1
      console.log(this.count)
    },
  },
}

Vue.createApp(count).mount("#app")
