import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import posts from './modules/posts';
import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex);
Vue.config.devtools = true;

export default new Vuex.Store({
  modules: {
    auth,
    posts
  },
  plugins: [vuexLocal.plugin]
})
