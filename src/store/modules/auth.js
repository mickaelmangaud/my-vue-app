import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  state: {
    email: '',
    isAuthenticated: false,
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated,
    email: state => state.email,
  },
  actions: {
    login: ({ commit }, { email, password }) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(credentials => {
          commit('login', credentials.user.email);
        })
        .catch(console.log);

    },
    logout: ({ commit }) => {
      firebase.auth().signOut();
      commit('logout');
    }
  },
  mutations: {
    login: (state, email) => {
      state.email = email;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.email = '';
      state.isAuthenticated = false;
    }
  }
}