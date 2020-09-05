//第２引数にイベントオブジェクトを指定する
//これによりイベントハンドラーの配下でも参照できるようになる
//$event でDOMイベントを引数で渡せる
new Vue({
  el: '#app',
  methods: {
    onclick: function (message, e) {
      console.log(message);
      console.log(e);
    }
  }
});