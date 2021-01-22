import axios from 'axios';

export default {
  state: {
    posts: [],
  },
  getters: {
    posts: state => state.posts
  },
  actions: {
    fetchPosts: async ({ commit }) => {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts?');
      commit('setPosts', data);
    },
    deletePost: async ({ commit }, id) => {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      commit('removePost', id)
    }
  },
  mutations: {
    setPosts: (state, posts) => state.posts = posts,
    removePost: (state, id) => state.posts = state.posts.filter(p => p.id !== id)
  }
}