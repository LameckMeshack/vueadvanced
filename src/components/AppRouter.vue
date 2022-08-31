<template>
  <component :is="routedComponent"></component>
</template>

<script>
import AboutPageVue from "@/pages/AboutPage.vue";
import HomePageVue from "@/pages/HomePage.vue";

const routes = {
  "/": HomePageVue,
  "/about": AboutPageVue,
};

export default {
  name: "AppRouter",
  data() {
    return { current: window.location.pathname };
  },
  computed: {
    routedComponent() {
      return routes[this.current];
    },
  },
};
</script>
