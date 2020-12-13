const app = new Vue({
  el: '#app',
  data() {
    return {
      text: 'Hello, Vue.js from data property!!'
    };
  },
  methods: {
    handleClick() {
      this.text = "button is clicked";
    }
  }
});
