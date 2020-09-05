//errorイベントが発生したときに代替の画像を表示する

new Vue({
  el: '#app',
  data: {
    path: '../images/wings.jpg',
  },
  methods: {
    onerror: function () {
      this.path = '../images/noimage.jpg';
    }
  },
});