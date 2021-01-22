export default {
  state: {
    isAuthenticated: false,
    username: '',
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated,
    username: state => state.username,
  },
  actions: {
    toggleAuth: (context) => {
      context.commit('toggleAuthenticated')
    }
  },
  mutations: {
    toggleAuthenticated: (state) => {
      state.isAuthenticated = !state.isAuthenticated
    }
  }
}