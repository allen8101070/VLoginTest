// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app;
let config = {
  apiKey: "AIzaSyA794sLaVwoUFFscBy7upPp5nDGed6E0gI",
  authDomain: "test-873bd.firebaseapp.com",
  databaseURL: "https://test-873bd.firebaseio.com",
  projectId: "test-873bd",
  storageBucket: "test-873bd.appspot.com"
  // ,messagingSenderId: "YOUR_MESSAGING_SEND_ID"
};

firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router
    })
  }
});
