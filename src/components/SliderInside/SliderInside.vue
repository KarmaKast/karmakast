<template>
  <div id="SliderInside" :style="{'width': window_width, 'height':height}">
    <button-spot
      id="logo"
      :size="height"
      :right_="button_positions[0]"
      :bottom="bttnSpot_bottom"
      :zIndex="zIndex+4"
      :img_src="logo_img_src_"
      :parentMarginTop="spot_top_margin"
    />
    <button-spot
      id="info"
      :size="height"
      :right_="button_positions[1]"
      :bottom="bttnSpot_bottom"
      :zIndex="zIndex+4"
      :img_src="info_img_src_"
      :parentMarginTop="spot_top_margin"
    />
    <button-spot
      id="info"
      :size="height"
      :right_="button_positions[2]"
      :bottom="bttnSpot_bottom"
      :zIndex="zIndex+4"
      :img_src="info_img_src_"
      :parentMarginTop="spot_top_margin"
    />
    <div id="SliderInside-bg" :style="{zIndex: zIndex}">
      <div :style="bg_styles[0]"></div>
      <div :style="bg_styles[1]"></div>
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
    window_width: function() {
      return this.$store.state.window_width;
    },
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
    bg_styles: function() {
      let styles_ = [
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
          position: "absolute",
          left: parseFloat(this.spot_top_margin) + "px",
          borderRadius: "0% " + this.bg_radius_ + this.bg_radius_ + "0%",
          height: this.bg_height
        }
      ];

      return [
        Object.assign({}, styles_[0], styles_[2]),
        Object.assign({}, styles_[1], styles_[2])
      ];
    },
    bg_drag: function() {
      return {
        height:
          parseFloat(this.bg_height) +
          parseFloat(this.spot_top_margin) * 6 +
          "px",
        bottom: "-" + parseFloat(this.spot_top_margin) * 5 + "px"
      };
    },
    button_positions: function() {
      let num = 3;
      let positions = ["0px"];
      for (let i = 1; i < num; i++) {
        let position =
          parseFloat(positions[i - 1]) +
          parseFloat(this.height) +
          this.buttonspots_spacing +
          "px";
        positions.push(position);
      }
      return positions;
    },
    curr_full_loc: function() {
      let curr_full_loc_ =
        parseFloat(this.$store.state.hotcorner_loc) +
        parseFloat(this.height) +
        parseFloat(this.spot_top_margin) * 2.4;
      return curr_full_loc_;
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
      drag_img_src_: require("@/assets/0001.svg"),
      swipe_loc: "0px",
      buttonspots_spacing: 12
    };
  },
  watch: {
    window_width: function() {
      if (this.curr_full_loc > parseFloat(this.window_width)) {
        let reset_loc =
          parseFloat(this.window_width) -
          parseFloat(this.height) -
          parseFloat(this.spot_top_margin) * 2.4;
        this.$store.commit("update_hotcorner_loc", reset_loc + "px");
        //alert("change detected");
      }
    }
  },
  created: function() {},
  destroyed: function() {},
  methods: {}
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