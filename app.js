window.onload = function () {
  var greet = new Vue({
    el: '#greet',
    data: {
      message: 'Hello Gerald'
    }
  })

  var data_source = 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=001cafe578234c1b956e11ecb6073d46';

  var demoList = new Vue({

    el: '#demoList',

    data: {
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
