window.onload = function () {
  var greet = new Vue({
    el: '#greet',
    data: {
      message: 'Hello Gerald'
    }
  })

  var data_source = 'data.json';

  var demoList = new Vue({

    el: '#demoList',

    data: {
      currentBranch: 'dev',
      items: null,
      articles: [],
    },

    created: function () {
      this.fetchData();
      console.log('Instance created...');
    },

    ready: function () {
      console.log('Instance ready...');
    },

    methods: {
      fetchData: function () {
        // GET /someUrl
        this.$http.get(data_source).then(response => {
          this.articles = JSON.parse(response.bodyText).articles;
        }, response => {
          // error callback
        });
      }
    }
  });
  Vue.config.devtools = true;
};
