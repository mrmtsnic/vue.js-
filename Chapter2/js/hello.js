let app = new Vue({
  el: "#app",
  data: {
    name: '',
    //upperName: '',
  },
  created() {
    this.delayFunc = _.debounce(this.getUpper, 2000);
  },
  computed: {
    upperName: function () {
      return this.name.toUpperCase();
    }
  },
  watch: {
    name: function (newValue, oldValue) {
      this.delayFunc();
    }
  },
  methods: {
    getUpper: function () {
      this.upperName = this.name.toUpperCase();
    }
  },
});
