let app = new Vue({
  el: "#app",
  data: {
    message: '皆さん、こんにちは！',
    url: 'https://wings.msn.to/',
    flag: true,
    email: 'Y-Suzuki@example.com',
  },
  computed: {
    localEmail: function () {
      return this.email.split('@')[0].toLowerCase();
    }
  },
});