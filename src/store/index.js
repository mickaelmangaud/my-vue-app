import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import posts from './modules/posts';

Vue.use(Vuex);
Vue.config.devtools = true;

export default new Vuex.Store({
  modules: {
    auth,
    posts
  }
})
