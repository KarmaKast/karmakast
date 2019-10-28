function create_buttonImg(button, img_path) {
    img_ = document.createElement('img');
    //button.appendChild(img_);
    img_.src = img_path;
    img_.style.maxHeight = "100%";


    img_.style.position = 'absolute';
    img_.style.top = button.style.top;
    img_.style.left = button.style.left;
    img_.style.marginTop = button.style.marginTop;
    img_.style.marginLeft = button.style.marginLeft;
    img_.style.zIndex = button.style.zIndex - 1;

    return img_;
}


function create_logo_hotcorner() {
    var navbar = document.getElementById('navbar');
    //console.log(navbar);
    var corner_zIndex_base = 6;
    var hotcorner = document.createElement('div');
    hotcorner.id = 'hotcorner';
    hotcorner.style.position = 'absolute';
    hotcorner.style.height = navbar.style.height;
    hotcorner.style.width = navbar.style.height;
    hotcorner.style.top = '0px';
    hotcorner.style.left = '0px';
    hotcorner.style.margin = '3px 0px 0px 3px';
    //hotcorner.style.pointerEvents = 'none';
    navbar.appendChild(hotcorner);

    var logo_bttn = document.createElement('button');
    hotcorner.appendChild(logo_bttn);
    // default
    logo_bttn.id = 'logo_button';
    logo_bttn.style.position = 'absolute';
    logo_bttn.style.top = '0px';
    logo_bttn.style.height = hotcorner.style.height;
    logo_bttn.style.width = hotcorner.style.height;
    //ele.style.maxHeight = "100%";
    //ele.style.maxWidth = navbar.style.height;
    logo_bttn.style.padding = '0px'; //fixing default padding
    //logo_bttn.style.margin = '3px 0px 0px 3px';
    logo_bttn.style.backgroundColor = 'rgba(0,0,0,0)'; //fixing default bg color
    logo_bttn.style.border = '0px'; //fixing default border
    logo_bttn.style.borderRadius = '50%';
    logo_bttn.style.zIndex = corner_zIndex_base + 6;
    logo_bttn.style.cursor = "pointer";
    // TODO remove outline when clicking the button
    logo_bttn.style.display = 'block';
    //logo_bttn.onfocus = () => { logo_bttn.style.outline = "none";};
    gStyle.innerHTML = gStyle.innerHTML + `
    button:focus {
        outline: none;
    }
    button::-moz-focus-inner {
        border: 0;
    }
    `;

    //logo_bttn.style[]
    //logo_bttn.style.boxShadow = 'rgba(255, 36, 48, 0.8) 0px 0px 0px 18px';
    // on hover/ mouse over -> increase size

    /*function mouse0ut() {
        //console.log(drop_bttn_isactive);
        setTimeout(function () {
            //console.log(drop_bttn_isactive);
            if (drop_bttn_isactive != true) {
                currHeight = parseFloat(navbar.children[1].style.height);
                newHeight = original_size_logo_bttn;
                ////console.log(newHeight);
                // if drop_bttn is being hovered do not execute this
                navbar.querySelector('button').style.height = newHeight.toString() + 'px';
                navbar.querySelector('button').style.width = newHeight.toString() + 'px';
                //navbar.children[1].children[0].style.boxShadow = '0px 0px 0px 0px rgba(0,0,0,0)';
                // update dropdown size and location to original value

                drop_bttn.style.top = (parseFloat(drop_bttn.style.top) - (currHeight - newHeight)) + 'px';
                drop_bttn.style.height = (parseFloat(drop_bttn.style.height) - drop_bttn_diffs[0]) + 'px';
                drop_bttn.style.width = (parseFloat(drop_bttn.style.width) - drop_bttn_diffs[1]) + 'px';
                hotcorner_state = false;
            }
        }, 300);
    }*/
    function hotcorner_processState(mode) {
        //console.log('processing state');
        //console.log(this);
        if (mode == 'desktop') {
            if (logo_bttn_mouse0ver) {
                // play animation
                //console.log('play animations');
                if (!drop_bttn_isactive) {
                    // make drop_bttn visible
                    drop_bttn.style.display = 'block';
                    //document.body.style.backgroundColor = 'rgb(100,100,100)';
                }
            } else {
                if (!drop_bttn_isactive) {
                    if (!drop_bttn_mouse0vered) {
                        // make drop_bttn invisible
                        drop_bttn.style.display = 'none';
                    }
                }

            }
        } else {
            //assume mobile

            // if touch only-> count as a press
            // if hold
            //      if drag
            // if drag
            //if (logo_bttn_touchstart) {
            //document.body.style.backgroundColor = 'rgb(0,50,100)';
            // check for drag
            /*
            if (logo_bttn_touchmoved) {
                //document.body.style.backgroundColor = 'rgb(0,50,100)';
                hotcorner.style.left = logo_bttn_touchmoved_locs.pageX + 'px';
            }*/
            if (logo_bttn_touchmoved) {
                hotcorner.style.left = (parseFloat(logo_bttn_touchmoved_locs.pageX) - parseFloat(logo_bttn_touchmoved_locs.pageX * 0.8)) + 'px';
                //document.body.style.backgroundColor = 'rgb(100,100,100)';
            }
            if (!logo_bttn_touchstart) {
                hotcorner.style.left = '0px';
                // open dropdown
            }
        }
    }


    // with mouse

    logo_bttn.addEventListener('mouseenter', function () {
        //document.body.style.backgroundColor = 'rgb(100,100,100)';
        logo_bttn_mouse0ver = true;
        //console.log('logo_bttn mouse-over');
        hotcorner_processState(curr_mode);

    });

    logo_bttn.addEventListener('mouseleave', function () {
        //document.body.style.backgroundColor = 'rgb(100,100,100)';
        setTimeout(function () {
            logo_bttn_mouse0ver = false;
            console.log('logo_bttn mouse-out');
            hotcorner_processState(curr_mode);
        }, 200);
    });
    // check if mouse events exist.
    // if yes remove them
    // assume mobile
    logo_bttn.addEventListener('touchstart', function () {
        //document.body.style.backgroundColor = 'rgb(100,100,100)';
        logo_bttn_touchstart = true;
        //console.log('logo_bttn mouse-over');
        hotcorner_processState(curr_mode);
        //setTimeout(() => {
        //    hotcorner_processState('mobile')
        //}, 300);

    });
    logo_bttn.addEventListener('touchend', function () {
        //document.body.style.backgroundColor = 'rgb(100,100,100)';
        //setTimeout(function () {
        logo_bttn_touchstart = false;
        logo_bttn_touchmoved = false;

        //console.log('logo_bttn mouse-out');
        hotcorner_processState(curr_mode);
        //}, 200);
    });
    logo_bttn.addEventListener('touchmove', function (ev) {
        //document.body.style.backgroundColor = 'rgb(100,100,100)';
        //setTimeout(function () {
        logo_bttn_touchmoved = true;
        logo_bttn_touchmoved_locs = ev.targetTouches[0]; // add deceleration 
        //console.log('logo_bttn mouse-out');
        hotcorner_processState(curr_mode);
        //}, 200);
    });

    //with touch
    /*
    press logo to load main page
    hold logo and drag it down to reveal drop down
    */
    //ele.style.boxShadow = '0px -20px 20px -5px rgba(255,36,48,0.8) inset';
    // 
    /*
    currHeight = parseFloat(ele.style.height);
    newHeight = currHeight + currHeight*20/100;
    //console.log(newHeight);
    ele.style.height = '420%';*/
    //ele.style.boxShadow = '0px 0px 4px 20px rgba(254,37,48,0.8)';
    //ele.style.opacity = '0';

    // TODO create logo image
    var logo_bttn_img = create_buttonImg(
        button = logo_bttn,
        img_path = "/images/final_4.png"
    );
    hotcorner.appendChild(logo_bttn_img);
    logo_bttn_img.style.borderRadius = '50%';
    //logo_bttn_img.style.pointerEvents = 'none';

    // TODO create round div with zindex below img bttn and put boxshadow to it
    var slider_base = document.createElement('div');
    slider_base.appendChild(document.createElement('div'));
    slider_base.appendChild(document.createElement('div'));
    slider_base.appendChild(document.createElement('div'));
    slider_base.appendChild(document.createElement('div'));
    hotcorner.appendChild(slider_base);
    slider_base.id = 'hider';
    slider_base.style.position = 'absolute';
    slider_base.style.height = navbar.style.height;
    console.log('navbar client width');
    console.log(navbar.clientWidth);
    slider_base.style.width = navbar.clientWidth + 'px';
    slider_base.style.top = logo_bttn.style.top;
    slider_base.style.left = (parseFloat(logo_bttn.clientWidth) - parseFloat(navbar.clientWidth)).toString() + 'px';
    slider_base.style.margin = logo_bttn.style.margin;
    //hider.style.backgroundColor = 'red'; //remove

    slider_base.children[0].style.zIndex = corner_zIndex_base + 3;
    slider_base.children[0].style.position = 'absolute';
    slider_base.children[0].style.right = '0px';
    slider_base.children[0].style.height = navbar.style.height;
    slider_base.children[0].style.width = navbar.style.height;
    slider_base.children[0].style.borderRadius = '0% 50% 50% 0%';
    slider_base.children[0].style.backgroundColor = 'rgba(249, 249, 249, 1)';
    slider_base.children[0].style.boxShadow = 'rgba(249, 249, 249, 1) 0px 0px 0px 7px';

    slider_base.children[1].style.zIndex = corner_zIndex_base + 1;
    slider_base.children[1].style.position = 'absolute';
    slider_base.children[1].style.right = '0px';
    slider_base.children[1].style.height = navbar.style.height;
    slider_base.children[1].style.width = navbar.style.height;
    slider_base.children[1].style.borderRadius = slider_base.children[0].style.borderRadius;
    slider_base.children[1].style.backgroundColor = 'rgba(255, 36, 48, 1)';
    slider_base.children[1].style.boxShadow = 'rgba(255, 36, 48, 1) 0px 0px 0px 8px';

    slider_base.children[2].style.zIndex = corner_zIndex_base + 2;
    slider_base.children[2].style.position = 'absolute';
    slider_base.children[2].style.right = (parseFloat(navbar.clientHeight) + parseFloat(hotcorner.style.marginLeft) - 5) + 'px';
    slider_base.children[2].style.height = navbar.style.height;
    slider_base.children[2].style.width = navbar.style.width;
    slider_base.children[2].style.borderRadius = '0px';
    slider_base.children[2].style.backgroundColor = 'rgba(249, 249, 249, 1)';
    slider_base.children[2].style.boxShadow = 'rgba(249, 249, 249, 1) 0px 0px 0px 7px';

    slider_base.children[3].style.zIndex = corner_zIndex_base;
    slider_base.children[3].style.position = 'absolute';
    slider_base.children[3].style.right = (parseFloat(navbar.clientHeight) + parseFloat(hotcorner.style.marginLeft)) + 'px';
    slider_base.children[3].style.height = navbar.style.height;
    slider_base.children[3].style.width = navbar.style.width;
    slider_base.children[3].style.borderRadius = '0px';
    slider_base.children[3].style.backgroundColor = 'rgba(255, 36, 48, 1)';
    slider_base.children[3].style.boxShadow = 'rgba(255, 36, 48, 1) 0px 0px 0px 8px';

    // TODO show release version in the slider
    // TODO (later) square/rectable >  bottom half release version top half settings
    var slider_inside_nav = document.createElement('nav');
    hotcorner.appendChild(slider_inside_nav);

    var drop_bttn = null;

    if (drop_bttn == null) {
        // create a rectangular button to be placed at the bottom of the logo on top of it
        //console.log(navbar.querySelector('button'));
        drop_bttn = document.createElement('button');
        hotcorner.appendChild(drop_bttn);
        drop_bttn.id = 'dropdown_button_01';
        drop_bttn = navbar.querySelector('#dropdown_button_01');
        drop_bttn.style.position = 'absolute';
        drop_bttn.style.width = navbar.clientHeight + 'px';
        drop_bttn.style.height = drop_bttn.style.width;

        drop_bttn.style.top = 'opx';
        drop_bttn.style.left = (parseFloat(logo_bttn.clientWidth) - 25).toString() + 'px';

        drop_bttn.style.borderRadius = '50% 50% 50% 50%';
        drop_bttn.style.backgroundColor = 'rgba(0,0,0,0.5)';
        drop_bttn.style.padding = '0px'; //fixing default padding
        drop_bttn.style.border = '0px'; //fixing default border
        drop_bttn.style.cursor = 'crosshair';
        drop_bttn.style.zIndex = corner_zIndex_base;

        //var drop_bttn_img = create_buttonImg(drop_bttn,'');

        responsive_worker.onmessage = (msg) => {
            console.log('message received from worker:');
            console.log(msg.data);

            if (msg.data[1] == 'desktop') {
                drop_bttn.style.display = 'none';
                drop_bttn.style.pointerEvents = 'auto';
            } else {
                // assume mobile
                drop_bttn.style.display = 'block';
                drop_bttn.style.pointerEvents = 'none';
            }
        }

        drop_bttn.addEventListener('mouseenter', function () {
            //console.log('drop_bttn mouse-over');
            drop_bttn_mouse0vered = true;
            hotcorner_processState(curr_mode);
        });
        drop_bttn.addEventListener('mouseleave', function () {
            //console.log('drop_bttn mouse-out');
            drop_bttn_mouse0vered = false;
            hotcorner_processState(curr_mode);
            //mouse0ut();
        });
        // assume mobile
        drop_bttn.addEventListener('touchstart', function () {
            //console.log('drop_bttn mouse-over');
            drop_bttn_touchstart = true;
            hotcorner_processState(curr_mode);
        });
        drop_bttn.addEventListener('touchend', function () {
            //console.log('drop_bttn mouse-out');
            drop_bttn_touchstart = false;
            hotcorner_processState(curr_mode);
            //mouse0ut();
        });

        //drop_bttn.style.backgroundImage = "url('/images/final_4.png')";


    }

    //var hotcorner_state = false;

    var logo_bttn_mouse0ver = false;
    var logo_bttn_touchstart = false;
    var logo_bttn_touchend = false;
    var logo_bttn_touchmoved = false;
    var log_bttn_mousedrag = false;

    var drop_bttn_mouse0vered = false;
    var drop_bttn_touchstart = false;
    var drop_bttn_isactive = false; // weather the navbar is expanded or not



    logo_bttn.onclick = function () {
        window.open(URL = home_url, nam = "_self")
    };
    drop_bttn.onclick = function () {
        //console.log('small button clicked');
    }

}