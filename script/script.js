const app = new Vue({
  el: '#app',
  data() {
    return {
      count: 0
    };
  },
  methods: {
    minus10() {
      this.count -= 10;
    },
    minus1() {
      this.count--;
    },
    set0() {
      this.count = 0;
    },
    plus1() {
      this.count++;
    },
    plus10() {
      this.count += 10;
    }
  }
});
