import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAuLMjrU9SF1IFgPL8X_yF561JXVzFfb2Q",
  authDomain: "fir-sandbox-64690.firebaseapp.com",
  projectId: "fir-sandbox-64690",
  storageBucket: "fir-sandbox-64690.appspot.com",
  messagingSenderId: "264313695827",
  appId: "1:264313695827:web:1b94a9da99692718aea0a6"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
