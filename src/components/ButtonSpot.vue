<template>
  <div class="ButtonSpot" :class="{active: isactive}" :style="this.Bttn_Spot_styleObj">
    <button
      ref="bttn"
      :style="{zIndex: zIndex+2}"
      @mouseenter="this.setfocus_toggle"
      @mouseleave="this.setfocus_toggle"
    ></button>
    <img :style="this.ImgSrc_styleObj" :src="img_src_" @error="noImageFound" />
  </div>
</template>

<script>
export default {
  name: "ButtonSpot",
  props: {
    size: String,
    right_: String,
    bottom: String,
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
      img_src_error: false,
      dragging: false,
      button_isfocused: false,
      defalut_icon_src: require("@/assets/action_add_1.svg"),
      touch_loc: "0px",
      draggable_maxPos : window.innerWidth - parseFloat(this.right_) - parseFloat(this.size)/2 - parseFloat(this.parentMarginTop)*2.4,
    };
  },
  computed: {
    img_src_: function() {
      if (this.img_src_error == true) {
        return this.defalut_icon_src;
      } else {
        return this.img_src;
      }
    },
    Bttn_Spot_styleObj: function() {
      return {
        height: this.size,
        width: this.size,
        zIndex: this.zIndex + 1,
        marginTop: this.parentMarginTop,
        right: this.right_,
        bottom: this.bottom,
        boxShadow:
          `inset 0px 0px 2px 0px rgba(0, 0, 0, 0.64),
    0px 0px 0px ` +
          (parseFloat(this.size) * 7) / 100 +
          `px rgba(0, 0, 0, 0.07)`
      };
    },
    ImgSrc_styleObj: function() {
      if (!this.button_isfocused) {
        return {
          zIndex: this.zIndex,
          display: this.img_display(),
          width: "96%",
          height: "96%",
          color: "rgb(222,5,36)"
        };
      } else {
        return {
          zIndex: this.zIndex,
          display: this.img_display(),
          width: "94%",
          height: "94%"
        };
      }
    },
    size_: function() {
      return {};
    }
  },
  mounted: function() {
    /*window.addEventListener("mousedown", this.buttonclick_toggle);
    window.addEventListener("mouseup", this.buttonclick_toggle);
    window.addEventListener("mousemove", this.swipeHandler);*/

    this.$el.addEventListener("mousedown", this.startDrag);
    window.addEventListener("mouseup", this.stopDrag);
    window.addEventListener("mousemove", this.mouseSwipeHandler);

    this.$el.addEventListener("touchstart", this.startDrag);
    window.addEventListener("touchend", this.stopDrag);
    window.addEventListener("touchmove", this.touchSwipeHandler);
  },
  methods: {
    noImageFound() {
      this.img_src_error = true;
      //Object.assign({},this.style_obj,{display:'none'});
    },
    img_display() {
      if (this.img_src_error) {
        /*
          if(this.default_icon_src_error)
        */
        return "initial";
      } else {
        return "initial";
      }
    },
    setfocus_toggle() {
      if (this.button_isfocused) {
        this.button_isfocused = false;
      } else {
        this.button_isfocused = true;
      }
    },
    startDrag() {
      this.dragging = true;
    },
    stopDrag() {
      this.dragging = false;
    },
    mouseSwipeHandler(ev) {
      this.doDrag(ev.clientX);
    },
    touchSwipeHandler(ev) {
      this.doDrag(ev.targetTouches[0].pageX);
    },
    doDrag(toPos) {
      if (this.dragging) {
        //alert('what? why?')
        // get actual position of button
        //let diff = toPos- parseFloat(this.right_) - parseFloat(this.size);
        //alert(diff);
        //let maxPos =  window.innerWidth - parseFloat(this.right_) - parseFloat(this.size)/2 - parseFloat(this.parentMarginTop)*2.4;
        if (!(toPos > this.draggable_maxPos)) {
          this.$store.commit(
            "update_hotcorner_loc",
            toPos + parseFloat(this.right_) - parseFloat(this.size) / 2 + "px"
          );
        }
      }
    }
  },
  watch: {
    button_isfocused: function() {
      if (this.button_isfocused === true) {
        // increase size of button and img and reposition them
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
  display: flex;
  position: absolute;
  border-radius: 50%;
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
  margin: auto;
  border-radius: 50%;
  border: 0px;
}
</style>
