<!-- <template>
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
</script> -->

<template>
  <a v-bind:href="href" v-bind:class="{ active: isActive }" v-on:click="go">
    <slot></slot>
  </a>
</template>

<script>
// import routes from "../routes";
import AboutPageVue from "@/pages/AboutPage.vue";
import HomePageVue from "@/pages/HomePage.vue";
const routes = { "/": HomePageVue, "/about": AboutPageVue };

export default {
  props: {
    href: {
      type: String,
      required: true,
    },
  },
  computed: {
    isActive() {
      return this.href === this.$root.currentRoute;
    },
  },
  methods: {
    go(event) {
      event.preventDefault();
      this.$root.currentRoute = this.href;
      window.history.pushState(null, routes[this.href], this.href);
    },
  },
};
</script>

<style scoped>
.active {
  color: cornflowerblue;
}
</style>
