window.onload = function () {
  var data_source = 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=001cafe578234c1b956e11ecb6073d46';

  var demoList = new Vue({

    el: '#demoList',

    data: {
      // Store the search items in searchText.
      searchText: '',
      // Store the items fetched from the endpoint.
      articles: [],
      // A custom variable.
      message: 'Hello Gerald',
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
        // GET the data from the endpoint.
        this.$http.get(data_source).then(response => {
          this.articles = JSON.parse(response.bodyText).articles;
        }, response => {
          // @TODO: Improve error callback.
        });
      }
    },

    computed: {
      // For search filter.
      itemsSearched: function() {
        var self = this;
        if (this.searchText == '') {
          return this.articles;
        }
        return this.articles.filter(function(item) {
          console.log(item);
          return item.title.toLowerCase().indexOf(self.searchText.toLowerCase()) >= 0;
        });
      }
    }
  });
  Vue.config.devtools = true;
};
