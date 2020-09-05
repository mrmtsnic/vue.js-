//マウスの出入りに応じて画像を切り替える

new Vue({
  el: '#app',
  data: {
    path: 'http://www.web-deli.com/image/linkbanner_l.gif',
  },
  methods: {
    //マウスが乗った時
    onmouseenter: function () {
      this.path = 'http://www.web-deli.com/image/home_chara.gif';
    },
    //マウスが離れたとき
    onmouseleave: function () {
      this.path = 'http://www.web-deli.com/image/linkbanner_l.gif';
    },
  },
});