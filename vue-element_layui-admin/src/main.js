import Vue from "vue";
import ElementUI from "element-ui";

//原始主题
import "element-ui/lib/theme-chalk/index.css";
//自定义主题
// import "../theme/index.css";
import "./assets/css/reset.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/scss/index.scss";

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
