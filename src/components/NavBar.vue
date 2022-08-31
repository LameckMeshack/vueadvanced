<template>
  <div>
    <div class="navbar">
      <div class="navbar__logo">
        <img src="../assets/logo.png" width="50" height="50" alt="logo" />
      </div>
      <div class="navbar__links">
        <AppRouter>Home</AppRouter>
        <AppRouter>About</AppRouter>
        <!-- <a class="link" href="#">Products</a>
        <a class="link" href="#" @click="goTo('/about')">About</a> -->
      </div>
    </div>

    <AppRouter />
  </div>
</template>
<!-- javascript -->
<!-- <script>
import AppRouter from "./AppRouter.vue";
export default {
  name: "NavBar",
  methods: {
    goTo(route) {
      window.location = route;
      event.preventDefault();
    },
  },
  components: { AppRouter },
};
</script> -->

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
</style>
