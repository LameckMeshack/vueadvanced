<template>
  <div id="app">
    <AsyncComponent />
  </div>
</template>
<script>
import Loading from "./LoadingComponent.vue";
import HelloWord from "./HelloComponent.vue";
import Error from "./ErrorComponent";
const AsyncComponent = () => ({
  component: new Promise((resolve) => {
    setTimeout(() => {
      resolve(HelloWord);
    }, 1000);
  }),
  loading: Loading,
  error: Error,
  delay: 0,
  timeout: 3000,
});
export default {
  name: "App",
  components: {
    AsyncComponent,
  },
};
</script>
<style></style>
