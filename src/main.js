import Vue from "vue";
// import App from "./App.vue";
import routes from "./Route.js";

Vue.config.productionTip = false;

// new Vue({
//   render: (h) => h(App),
// }).$mount("#app");
const app = new Vue({
  el: "#app",
  data: {
    currentRoute: window.location.pathname,
  },
  computed: {
    ViewComponent() {
      const matchingView = routes[this.currentRoute];
      return matchingView
        ? // + matchingView + ".vue"
          require("./pages/HomePage.vue")
        : require("./pages/404.vue");
    },
  },
  render(h) {
    return h(this.ViewComponent);
  },
});

window.addEventListener("popstate", () => {
  app.currentRoute = window.location.pathname;
});
