<script>
export default {
  name: "LifeCycle",
  beforeCreate() {
    alert("beforCreate hook has been called");
    console.log("beforCreate hook has been called");
  },
};
</script>
<template>
  <div></div>
</template>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
