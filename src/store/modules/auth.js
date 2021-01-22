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
    login: ({ commit }, {username , password}) => {
      commit('login', {username, password})
    }
  },
  mutations: {
    login: (state, {username}) => {
      state.username = username;
      state.isAuthenticated = true;
    }
  }
}