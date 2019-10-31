<template>
  <div class="ButtonSpot" :class="{active: isactive}" :style="this.Bttn_Spot_styleObj">
    <button :style="{zIndex: zIndex+1}" v-on:mouse.capture="this.hovered_counter_add"></button>
    <img :style="this.ImgSrc_styleObj" :src="img_src_" @error="noImageFound" />
  </div>
</template>

<script>
export default {
  name: "ButtonSpot",
  props: {
    defalut_icon: String,
    size: String,
    zIndex: Number,
    img_src: String,
    emptySpot_img_src: String,
    style_obj: Object,
    parentMarginTop: String
  },
  data: function() {
    return {
      isactive: false,
      hovered_counter: 0,
      img_src_error: false
    };
  },
  computed: {
    img_src_: function() {
      if (this.img_src != null) {
        return this.img_src;
      } else if (this.emptySpot_img_src != null) {
        return this.emptySpot_img_src;
      } else {
        return "";
      }
    },
    Bttn_Spot_styleObj: function() {
      return {
        height: this.size,
        width: this.size,
        zIndex: this.zIndex + 1,
        marginTop: this.parentMarginTop
      };
    },
    ImgSrc_styleObj: function() {
      return {
        zIndex: this.zIndex,
        display: this.img_display()
      };
    },
    size_: function() {
      return {};
    }
  },
  methods: {
    hovered_counter_add() {
      this.hovered_counter = this.hovered_counter + 1;
    },
    noImageFound() {
      this.img_src_error = true;
      //Object.assign({},this.style_obj,{display:'none'});
    },
    img_display() {
      if (this.img_src_error) {
        return "none";
      } else {
        return "initial";
      }
    }
  }
};
</script>

<style scoped>
.active {
  background-color: rgba(0, 0, 0, 0.4);
}
.ButtonSpot {
  position: absolute;
  right: 0px;
  border-radius: 50%;
  box-shadow: inset 0px 0px 2px 0px rgba(0, 0, 0, 0.64),
    0px 0px 0px 5px rgba(0, 0, 0, 0.07);
}
button {
  position: absolute;
  right: 0px;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  padding: 0px;
  border: 0px;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
}
img {
  position: absolute;
  right: 0px;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  border: 0px;
}
</style>
