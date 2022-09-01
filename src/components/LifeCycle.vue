<!-- <script>
export default {
  name: "LifeCycle",
  beforeCreate() {
    alert("beforCreate hook has been called");
    console.log("beforCreate hook has been called");
  },
};
</script> -->
<!-- <script>
export default {
  name: "LifeCycle",
  data() {
    return {
      books: 0,
    };
  },
  created() {
    alert("Created hook has been called");
    console.log(`books is of type ${typeof this.books}`);
  },
};
</script> -->
<!-- <script>
export default {
  beforeMount() {
    alert("beforeMount is called");
  },
};
</script> -->
<!-- <script>
export default {
  mounted() {
    alert("mounted has been called");
  },
};
</script> -->
<!-- <template>
  <div>
    <div>{{ hello }}</div>
    <h1>hello</h1>
  </div>
</template> -->
<!-- <script>
export default {
  name: "LifeCycle",
  data() {
    return {
      books: 0,
      hello: "welcome to Vue JS",
    };
  },
  beforeUpdate() {
    alert("beforeUpdate hook has been called");
  },
  mounted() {
    this.$data.hello = "lalalalallalalalalaalal";
  },
};
</script> -->
<!-- 
<template>
  <div>{{ hello }}</div>
</template>
<script>
export default {
  name: "LifeCycle",
  data() {
    return {
      books: 0,
      hello: "welcome to Vue JS",
    };
  },
  beforeUpdate() {
    alert("beforeUpdate hook has been called");
  },
  updated() {
    alert("Updated hook has been called");
  },
  mounted() {
    this.$data.hello = "lalalalallalalalalaalal";
  },
};
</script> -->

<template>
  <div></div>
</template>
<!-- <script>
export default {
  name: "LifeCycle",
  data() {
    return {
      books: 0,
    };
  },
  beforeDestroy() {
    this.books = null;
    delete this.books;
  },
};
</script> -->
<script>
export default {
  destroyed() {
    this.$destroy();
    console.log(this);
  },
};
</script>
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
