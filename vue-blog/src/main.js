import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

import List from "./posts/list.json";
import { routes } from "./routes";

List.map(data => {
  Vue.component(data.id, () => import(`./posts/${data.id}.md`));
});

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
