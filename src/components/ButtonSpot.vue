<template>
  <div class="ButtonSpot" :class="{active: isactive}" :style="this.styleObj">
    <button :style="{zIndex: zIndex+1}" ></button>
    <img :style="{zIndex: zIndex}" :src="img_src_" />
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
      isactive: false
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
    styleObj: function() {
      return {
        height: this.size,
        width: this.size,
        zIndex: this.zIndex + 1,
        marginTop: this.parentMarginTop
      };
    },
    size_: function() {
      return {};
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
  border-radius: 100%;
  border: 0px;
  box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.4);
}
</style>
