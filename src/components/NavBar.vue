<template>
  <div>
    <div class="navbar">
      <div class="navbar__logo">
        <img src="../assets/logo.png" width="50" height="50" alt="logo" />
      </div>
      <div class="navbar__links">
        <a class="link" href="#/">Home</a>
        <a class="link" href="#/about">About</a>
        <a class="link" href="#/scacs">Contact</a>
      </div>
    </div>
  </div>
</template>
<!-- javascript -->
<script>
export default {
  name: "NavBar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/style.scss";

.navbar {
  display: flex;
  width: 1800px;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgb(9, 143, 85);
  box-shadow: 0 4px 4px rgba(13, 1, 1, 0.872);
  /* margin-bottom: 30px; */
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
