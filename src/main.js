import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import "bulma/css/bulma.css";

Vue.config.productionTip = false
axios.defaults.baseURL="http://127.0.0.1:8000/"

// axios.interceptors.response.use(undefined, function (error) {
//   if (error) {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       store.dispatch("LogOut");
//       return router.push("/login");
//     }
//   }
// });

Vue.prototype.$http = axios;
const token = localStorage.getItem("access_token");
if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}

Vue.config.productionTip = false;
Vue.use(Buefy);

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
