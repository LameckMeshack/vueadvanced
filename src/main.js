// import Vue from "vue";
// import App from "./App.vue";

// Vue.config.productionTip = false;

// new Vue({
//   render: (h) => h(App),
// }).$mount("#app");
import Vue from "vue";
import routes from "./Route.js";

const app = new Vue({
  el: "#app",
  data: {
    currentRoute: window.location.pathname,
  },
  computed: {
    ViewComponent() {
      const matchingView = routes[this.currentRoute];
      return matchingView
        ? require("./page/" + matchingView + ".vue")
        : require("./page/404.vue");
    },
  },
  render(h) {
    return h(this.ViewComponent);
  },
});

window.addEventListener("popstate", () => {
  app.currentRoute = window.location.pathname;
});
