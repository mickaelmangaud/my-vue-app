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
    logout: ({ commit }) => commit('logout')
  },
  mutations: {
    login: (state, email) => {
      state.email = email;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      firebase.auth().signOut();
      state.email = '';
      state.isAuthenticated = false;
    }
  }
}