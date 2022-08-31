<template>
  <div id="app">
    <NavBar />
    <component :is="currentView" />
  </div>
</template>
<script>
import HomePage from "./pages/HomePage.vue";
import AboutPage from "./pages/AboutPage.vue";
import NotFound from "./pages/NotFound.vue";
import NavBar from "./components/NavBar.vue";

const routes = {
  "/": HomePage,
  "/about": AboutPage,
};

export default {
  data() {
    return {
      currentPath: window.location.hash,
    };
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || "/"] || NotFound;
    },
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
    });
  },
  components: { NavBar },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
