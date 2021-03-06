import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    strict: debug,
    state: {
        window_height: window.innerHeight + 'px',
        window_width: window.innerWidth + 'px',
        hotcorner_loc: '0px',
        hotcorner_expandedMagnet: false,
        hotcorner_expandedMagnetRange: 20
    },
    mutations: {
        update_window_height(state, val) {
            state.window_height = val;
        },
        update_window_width(state, val) {
            state.window_width = val;
        },
        update_hotcorner_loc(state, val) {
            state.hotcorner_loc = val;
        },
        update_hotcorner_expandedMagnet(state, val) {
            state.hotcorner_expandedMagnet = val;
        }
    },
    actions: {

    },
    getters: {
        /* 
        default: mobile
        display the maximum experience
        assume display is not smaller than minimum mobile size
        */
        isVertical: (state) => {
            if (parseFloat(state.window_height) > parseFloat(state.window_width)) {
                return true;
            } else {
                return false;
            }
            //window.devicePixelRatio
        }
    },
    modules: {
        // move device responsive states to module
    },
});