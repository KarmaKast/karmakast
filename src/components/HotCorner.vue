<template>
  <div id="HotCorner" v-bind:style="styleObj">
    <slider-inside
      :height="size"
      :zIndex="base_zIndex+1"
      :parentMargin="margin"
      :hotCornerLoc="location"
      :insidePaddingPercent="16"
      :window_width="this.window_width"
    />
    <div id="SliderNavbar"></div>
  </div>
</template>

<script>
import SliderInside from "./SliderInside/SliderInside.vue";

export default {
  name: "HotCorner",
  components: {
    SliderInside
  },
  props: {
    base_zIndex: Number,
    size: String
  },
  computed: {
    location: function() {
      return "8px";
    },
    styleObj: function() {
      return {
        zIndex: this.base_zIndex,
        width: this.size,
        height: this.size,
        marginTop: this.margin,
        marginLeft: this.margin,
        paddingLeft: this.location
      };
    }
  },
  data: function() {
    return {
      state: "beforeLoad",
      margin: "4px",
      window_width: window.innerWidth+'px',
      window_height: window.innerHeigh+'px'
    };
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#HotCorner {
  position: absolute;
}
</style>
