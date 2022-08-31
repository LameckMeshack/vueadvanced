<template>
  <div id="app">
    <NavBar />
    <DynamicComponent />
    <component :is="currentView" />
  </div>
</template>
<script>
import routes from "../src/routes.js";
import NotFound from "./pages/NotFound.vue";
import NavBar from "./components/NavBar.vue";
import DynamicComponent from "./components/dynamic/DynamicComponent.vue";

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
  components: { NavBar, DynamicComponent },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
