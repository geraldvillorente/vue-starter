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

      // For Vue Spinner.
      color: '#3AB982',
      size: '150px',
      margin: '2px',
      radius: '100%',
      height: '50px',
      width: '50px',
      loading: true
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
          this.loading = false;
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
          // Return all items if the search is empty.
          return this.articles;
        }
        return this.articles.filter(function(item) {
          // Implements case insensetive in search filter by using toLowerCase().
          return item.title.toLowerCase().indexOf(self.searchText.toLowerCase()) >= 0;
        });
      }
    },

    components: {
      PulseLoader,
      FadeLoader,
      ClipLoader,
    }
  });
  Vue.config.devtools = true;
  Vue.config.debug = true;
};
