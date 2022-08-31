<template>
  <div>
    <div class="d-flex justify-content-center">
      <div @click="selectedComponent = 'One'" class="p-2 m-2 btn btn-primary">
        One
      </div>
      <div @click="selectedComponent = 'Two'" class="p-2 m-2 btn btn-primary">
        Two
      </div>
      <div @click="selectedComponent = 'Three'" class="p-2 m-2 btn btn-primary">
        Three
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <keep-alive>
        <component :is="selectedComponent"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
// import One from "./FirstComponent.vue";
// import Two from "./SecondComponent.vue";
// import Three from "./ThirdComponent.vue";
import Three from "./ThirdDynamic.vue";
import One from "./FirstDynamic.vue";
import Two from "./SecondDynamic.vue";

export default {
  components: { One, Two, Three },

  data() {
    return {
      selectedComponent: "One",
    };
  },
};
</script>
