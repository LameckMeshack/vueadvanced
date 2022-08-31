<template>
  <div class="navbar">
    <div class="navbar__logo">
      <img src="../assets/logo.png" width="50" height="50" alt="logo" />
    </div>
    <div class="navbar__links">
      <a v-bind:href="href" v-bind:class="{ active: isActive }" v-on:click="go"
        >Home</a
      >
      <a v-bind:href="href" v-bind:class="{ active: isActive }" v-on:click="go"
        >Products</a
      >
      <a v-bind:href="href" v-bind:class="{ active: isActive }" v-on:click="go"
        >About</a
      >
    </div>
  </div>
</template>
<script>
import routes from "../routes";

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgb(9, 143, 85);
  box-shadow: 0 4px 4px rgba(13, 1, 1, 0.872);
}
.navbar__logo {
  margin-left: 50px;
}
.navbar__links {
  width: 40%;
  display: flex;
  justify-content: space-between;

  margin: 0px 100px;
}

a:hover {
  background-color: #fff;
  color: rgb(9, 143, 85);
}
a {
  color: #fff;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}
.active {
  color: cornflowerblue;
}
</style>
