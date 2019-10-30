<template>
  <div id="app">
    <HotCorner v-bind:base_zIndex=HotCorner_base_zIndex v-bind:size=HotCorner_size></HotCorner>
  </div>
</template>

<script>
import HotCorner from "./components/HotCorner.vue";

export default {
  name: "app",
  components: {
    HotCorner
  },
  data() {
    return {
      HotCorner_base_zIndex: 40,
      HotCorner_size: "60px",
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0%;
}
</style>
