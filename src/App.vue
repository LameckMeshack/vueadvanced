<template>
  <div id="app">
    <NavBar />
    <DynamicComponent />
    <AsyncComp />
    <button @click="accessed">Alert Root Data</button>
    <LifeCycle />
    <component :is="currentView" />
  </div>
</template>
<script>
import routes from "../src/routes.js";
import NotFound from "./pages/NotFound.vue";
import NavBar from "./components/NavBar.vue";
import DynamicComponent from "./components/dynamic/DynamicComponent.vue";
import AsyncComp from "./components/AsyncComponents/AsyncComp.vue";
import LifeCycle from "./components/LifeCycle.vue";

export default {
  // const AsyncComponent = () => ({
  // component: new Promise(resolve => {
  //   setTimeout(() => {
  //     resolve(HelloWord);
  //   }, 1000);
  // }),
  //   loading: Loading,
  //   error: Error,
  //   delay: 0,
  //   timeout: 3000
  // }),
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
  methods: {
    accessed() {
      alert(this.$root.rootValue);
    },
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
    });
  },
  components: { NavBar, DynamicComponent, AsyncComp, LifeCycle },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
