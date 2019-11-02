<template>
  <div id="HotCorner" v-bind:style="styleObj">
    <slider-inside
      :height="size"
      :zIndex="base_zIndex+1"
      :parentMargin="margin"
      :hotCornerLoc="location"
      :insidePaddingPercent="16"
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
    /*window_fromStore: function() {
      return "";
      //return this.$Store.state.window;
    },*/
    location: function() {
      return this.$store.state.hotcorner_loc;
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
    };
  },
  methods: {
  },
  created: function() {
  },
  destroyed: function() {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#HotCorner {
  position: absolute;
  /*background-color: red;*/
}
</style>
