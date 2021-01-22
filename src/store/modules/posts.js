import axios from 'axios';

export default {
  state: {
    posts: [],
  },
  getters: {
    posts: state => state.posts
  },
  actions: {
    async fetchPosts ({ commit }) {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
      commit('setPosts', data);
    }
  },
  mutations: {
    setPosts: (state, posts) => {
      state.posts = posts;
    }
  }
}