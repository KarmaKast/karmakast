<template>
  <div id="SliderInside" v-bind:style="{'width': window_width_, 'height':height}">
    <button-spot
      :size="height"
      :zIndex="zIndex+4"
      :img_src="img_src_"
      :parentMarginTop="spot_top_margin"
    />
    <div id="SliderInside-bg">
      <!-- on created, generate elements-->
      <div :style="Object.assign({}, this.bg_styles[0],this.bg_styles[2])"></div>
      <div :style="Object.assign({}, this.bg_styles[1],this.bg_styles[2])"></div>
    </div>
  </div>
</template>

<script>
import ButtonSpot from "../ButtonSpot.vue";

export default {
  name: "SliderInside",
  components: {
    ButtonSpot
  },
  props: {
    height: String,
    zIndex: Number,
    parentMargin: String,
    hotCornerLoc: String,
    insidePaddingPercent: Number
  },
  computed: {
    window_width_: function() {
      return this.window_width + "px";
    },
    img_src_: function() {
      return require("@/assets/final_4.png");
    },
    spot_top_margin: function() {
      return (
        (
          (parseFloat(this.bg_height) - parseFloat(this.height)) /
          2
        ).toString() + "px"
      );
    },
    bg_height: function() {
      let percent = 5;
      if (this.insidePaddingPercent != null) {
        percent = this.insidePaddingPercent;
      }
      return (
        parseFloat(this.height) +
        (parseFloat(this.height) * percent) / 100 +
        "px"
      );
    },
    bg_radius_: function() {
      //return parseFloat(this.height)+
      let radius = (parseFloat(this.bg_height) / 2).toString() + "px ";
      return radius;
    },
    bg_styles: function() {
      return [
        {
          zIndex: this.zIndex,
          backgroundColor: this.bg_colors[0] + "" + this.bg_opacity + ")",
          boxShadow:
            this.bg_colors[0] + "" + this.bg_opacity + ") 0px 0px 0px 7px"
        },
        {
          zIndex: this.zIndex + 1,
          boxShadow:
            this.bg_colors[1] + "" + this.bg_opacity + ") 0px 0px 0px 1px"
        },
        {
          width: "100%",
          position: "fixed",
          right:
            parseFloat(this.window_width_) -
            parseFloat(this.height) -
            parseFloat(this.spot_top_margin) -
            parseFloat(this.parentMargin) -
            parseFloat(this.hotCornerLoc) +
            "px",
          borderRadius: "0% " + this.bg_radius_ + this.bg_radius_ + "0%",
          height: this.bg_height
        }
      ];
    }
  },
  data: function() {
    return {
      window_width: window.innerWidth,
      publicPath: process.env.BASE_URL,
      bg_colors: ["rgba(249, 249, 249, ", "rgba(255, 36, 48, "],
      bg_opacity: 0.3
    };
  },
  created: function() {
    window.addEventListener("resize", this.handleResize);
    //this.handleResize();
    //this.window_width = window.innerWidth;
  },
  destroyed: function() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.window_width = window.innerWidth;
    }
  }
};
</script>

<style scoped>
#SliderInside {
  position: absolute;
  right: 0px;
  /*background-color: red;*/
}
</style>