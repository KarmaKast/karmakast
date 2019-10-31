<template>
  <div id="app">
    <HotCorner v-bind:base_zIndex="HotCorner_base_zIndex" v-bind:size="HotCorner_size"></HotCorner>
    <div id="app_bg" :style="this.bgStyleObj" ></div>
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
      HotCorner_size: "54px", // keep it to odd numbers
      theme: "auto", // TODO
      window_width: window.innerWidth+'px',
      window_height: window.innerHeight+'px'
    };
  },
  computed: {
    bgStyleObj: function() {
      return {
        position: 'fixed',
        width: this.window_width,
        height: this.window_height
      };
    }
  },
  methods: {
    handleResize() {
      this.window_width = window.innerWidth+'px';
      this.window_height = window.innerHeight+'px';
    }
  },
  created: function() {
    window.addEventListener("resize", this.handleResize);
    //this.handleResize();
    //this.window_width = window.innerWidth;
  },
  destroyed: function() {
    window.removeEventListener("resize", this.handleResize);
  },
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
