<template>
  <div class="ButtonSpot" :class="{active: isactive}" :style="this.Bttn_Spot_styleObj">
    <button :style="{zIndex: zIndex+1}" @mouseenter="this.setfocus" @mouseleave="this.setfocus"></button>
    <img :style="this.ImgSrc_styleObj" :src="img_src_" @error="noImageFound" />
  </div>
</template>

<script>
export default {
  name: "ButtonSpot",
  props: {
    size: String,
    right: String,
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
      button_isfocused: true,
      defalut_icon_src: require("@/assets/action_add.svg")
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
        right: this.right,
        bottom: this.bottom,
        boxShadow:
          `inset 0px 0px 2px 0px rgba(0, 0, 0, 0.64),
    0px 0px 0px ` +
          (parseFloat(this.size) * 7) / 100 +
          `px rgba(0, 0, 0, 0.07)`
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
  created: function() {
    this.setfocus();
  },
  methods: {
    setfocus() {
      if (this.button_isfocused) {
        this.button_isfocused = false;
        /*document.body.style.background =
        ("linear-gradient(45deg, rgb(255, 20, 50), rgb(202, 200, 18))");*/
      } else {
        this.button_isfocused = true;
        /*document.body.style.background =
        ("linear-gradient(45deg, rgb(202, 200, 18), rgb(255, 20, 50))");*/
      }
    },
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
    }
  },
  watch: {
    button_isfocused: function(){
      if (this.button_isfocused===true) {
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
  height: 96%;
  width: 96%;
  border-radius: 50%;
  border: 0px;
}
</style>
