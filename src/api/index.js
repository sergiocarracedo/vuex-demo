import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

// HTTP
Vue.http.options.crossOrigin = true;

export default {
  getAllPosts: function () {
    return Vue.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
