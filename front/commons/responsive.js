console.log('responsive.js loaded');
var responsive_worker = null; 
var media_modes = ['auto', 'mobile', 'tablet', 'desktop'];
var media_modes_bools = {
    'auto': false,
    'mobile': true,
    'tablet': true,
    'desktop': true
};
var force_set_mode = media_modes[0];
var curr_mode = get_mode();

function mode_listener(x) {
    if (responsive_worker==null) {
        responsive_worker = new Worker('/front/commons/responsive_worker.js');
    }
    let curr_mode_ = curr_mode;
    if (x.matches) { // If media query matches
        if (x.media.match('1024')) {
            media_modes_bools['desktop'] = true;
            //document.body.style.backgroundColor = "yellow";
        }
        if (x.media.match('768')) {
            media_modes_bools['tablet'] = true;
            //document.body.style.backgroundColor = "pink";
        }
        if (x.media.match('320')) {
            media_modes_bools['mobile'] = true;
            //document.body.style.backgroundColor = "red";
        }

    } else {
        if (x.media.match('1024')) {
            media_modes_bools['desktop'] = false;
            //document.body.style.backgroundColor = "yellow";
        }
        if (x.media.match('768')) {
            media_modes_bools['tablet'] = false;
            //document.body.style.backgroundColor = "pink";
        }
        if (x.media.match('320')) {
            media_modes_bools['mobile'] = false;
            //document.body.style.backgroundColor = "red";
        }
    }
    curr_mode = get_mode();
    let msg = [curr_mode_, curr_mode];
    //console.log('mode changed:');
    //console.log(msg);
    responsive_worker.postMessage(msg);
}


var mode_min_320 = window.matchMedia("(min-width: 320px)");
var mode_min_768 = window.matchMedia("(min-width: 768px)");
var mode_min_1024 = window.matchMedia("(min-width: 1024px)");

function setup_listeners() {
    mode_min_320.addListener(mode_listener);
    mode_min_768.addListener(mode_listener);
    mode_min_1024.addListener(mode_listener);
}

function get_mode() {
    if (force_set_mode == 'auto') {
        var mode = null;
        if (media_modes_bools['tablet'] == true) {
            if (media_modes_bools['desktop'] == true) {
                return 'desktop';
            } else {
                return 'tablet';
            }
        } else {
            return 'mobile';
        }
        //return mode;
    } else {
        return force_set_mode;
    }
}