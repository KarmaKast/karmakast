<template>
  <div id="SliderInside" :style="{'width': window_width, 'height':height}">
    <div
      id="SlideHandle"
      :style="{'width': window_width, 'height':height, 'margin-top':spot_top_margin}"
      :zIndex="zIndex+5"
      v-touch:swipe.right="swipeHander"
    ></div>

    <button-spot
      id="logo"
      :size="height"
      right="0px"
      :bottom="bttnSpot_bottom"
      :zIndex="zIndex+4"
      :img_src="logo_img_src_"
      :parentMarginTop="spot_top_margin"
    />
    <button-spot
      id="info"
      :size="height"
      right="72px"
      :bottom="bttnSpot_bottom"
      :zIndex="zIndex+4"
      :img_src="info_img_src_"
      :parentMarginTop="spot_top_margin"
    />
    <button-spot
      id="info"
      :size="height"
      right="144px"
      :bottom="bttnSpot_bottom"
      :zIndex="zIndex+4"
      :img_src="info_img_src_"
      :parentMarginTop="spot_top_margin"
    />
    <div id="SliderInside-bg" :style="{zIndex: zIndex}">
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
    insidePaddingPercent: Number,
    window_width: String
  },
  computed: {
    spot_top_margin: function() {
      return (
        (
          (parseFloat(this.bg_height) - parseFloat(this.height)) /
          2
        ).toString() + "px"
      );
    },
    bttnSpot_bottom: function() {
      return "-" + this.spot_top_margin;
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
    bg_right_: function() {
      return (
        parseFloat(this.window_width) -
        parseFloat(this.height) -
        parseFloat(this.spot_top_margin) -
        parseFloat(this.parentMargin) -
        parseFloat(this.hotCornerLoc) +
        "px"
      );
    },
    bg_styles: function() {
      return [
        {
          zIndex: this.zIndex + 1,
          backgroundColor: this.bg_colors[0] + "" + 1 * this.bg_opacity + ")"
        },
        {
          zIndex: this.zIndex,
          backgroundColor: this.bg_colors[0] + "" + 0.8 * this.bg_opacity + ")",
          boxShadow:
            this.bg_colors[1] +
            "" +
            0.035 +
            ") 0px 0px 0px 7px" +
            ", " +
            this.bg_colors[1] +
            "" +
            2 * this.bg_opacity +
            ") 0px 0px 0px 1.5px"
        },
        {
          width: "100%",
          position: "fixed",
          right: this.bg_right_,
          borderRadius: "0% " + this.bg_radius_ + this.bg_radius_ + "0%",
          height: this.bg_height
        }
      ];
    },
    bg_drag: function() {
      return {
        height: (parseFloat(this.bg_height)+parseFloat(this.spot_top_margin)*6) + "px",
        bottom: "-" + parseFloat(this.spot_top_margin)*5 + 'px'
      };
    }
  },
  data: function() {
    return {
      publicPath: process.env.BASE_URL,
      bg_colors: [
        "rgba(255, 255, 255, ",
        "rgba(255, 56, 76, ",
        "rgba(245, 21, 32, "
      ],
      bg_opacity: 1,
      logo_img_src_: require("@/assets/final_4.png"), // TODO move these to computed to account for updated images
      info_img_src_: "",
      drag_img_src_: require("@/assets/0001.svg")
    };
  },
  created: function() {},
  destroyed: function() {},
  methods: {
    swipeHander() {
      // update the location computed data in HotCorner Component
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
#SlideHandle {
  position: absolute;
  right: 0px;
}
</style>