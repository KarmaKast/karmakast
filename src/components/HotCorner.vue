<template>
  <div id="HotCorner" v-bind:style="styleObj">
    <slider-inside
      :height="size"
      :zIndex="base_zIndex+1"
      :parentMargin="margin"
      :hotCornerLoc="location"
      :insidePaddingPercent=20
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
      return '50px';
    },
    styleObj: function() {
      return {
        zIndex: this.base_zIndex,
        width: this.size,
        height: this.size,
        marginTop: this.margin,
        marginLeft: this.margin,
        paddingLeft: this.location,
      };
    }
  },
  data: function() {
    return {
      state: "beforeLoad",
      margin: "4px"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#HotCorner {
  position: absolute;
}
</style>
