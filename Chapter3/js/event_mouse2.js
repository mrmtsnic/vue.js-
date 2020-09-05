//mouseenter/mouseleaveとmouseover/mouseoutの相違点
//mouseover/mouseoutは違う領域に出入りするたびに発生
//mouseenter/mouseleaveは親要素のみに発生
new Vue({
  el: '#app',
  data: {
    result: '',
  },
  methods: {
    //mouseenter/mouseleaveイベントの情報をresultに反映
    onmousein: function (e) {
      this.result += 'Enter:' + e.target.id + '<br/>';
    },
    onmouseout: function (e) {
      this.result += 'Leave:' + e.target.id + '<br/>';
    }
  }
});