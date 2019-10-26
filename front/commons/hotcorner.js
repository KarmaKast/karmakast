function create_buttonImg(button, img_path) {
    img_ = document.createElement('img');
    button.appendChild(img_);
    img_.src = img_path;
    img_.style.maxHeight = "100%";
}
var navbar = document.getElementById('navbar');
console.log(navbar);
var corner_zIndex_base = 6;

function create_logo_hotcorner() {
    var logo_bttn = document.createElement('button');
    navbar.appendChild(logo_bttn);
    // default
    logo_bttn.id = 'logo_button';
    logo_bttn.style.position = 'absolute';
    logo_bttn.style.top = '0px';
    logo_bttn.style.height = navbar.style.height;
    logo_bttn.style.width = navbar.style.height;
    //ele.style.maxHeight = "100%";
    //ele.style.maxWidth = navbar.style.height;
    logo_bttn.style.padding = '0px'; //fixing default padding
    logo_bttn.style.margin = '3px 0px 0px 3px';
    logo_bttn.style.backgroundColor = 'rgba(0,0,0,0)'; //fixing default bg color
    logo_bttn.style.border = '0px'; //fixing default border
    logo_bttn.style.borderRadius = '50%';
    logo_bttn.style.zIndex = corner_zIndex_base+3;
    logo_bttn.style.cursor ="pointer";
    //logo_bttn.style.boxShadow = 'rgba(255, 36, 48, 0.8) 0px 0px 0px 18px';
    // on hover/ mouse over -> increase size

    /*function mouse0ut() {
        console.log(drop_bttn_isactive);
        setTimeout(function () {
            console.log(drop_bttn_isactive);
            if (drop_bttn_isactive != true) {
                currHeight = parseFloat(navbar.children[1].style.height);
                newHeight = original_size_logo_bttn;
                //console.log(newHeight);
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
    //window.setTimeout(mouse0ut, 100);
    // with mouse
    logo_bttn.addEventListener('mouseenter', function() {
        hotcorner_state = true;

    });
    logo_bttn.addEventListener('mouseleave', function() {
        hotcorner_state = false;
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
    console.log(newHeight);
    ele.style.height = '420%';*/
    //ele.style.boxShadow = '0px 0px 4px 20px rgba(254,37,48,0.8)';
    //ele.style.opacity = '0';

    // TODO create logo image
    create_buttonImg(logo_bttn, "/images/final_4.png");
    logo_bttn.querySelector('img').zIndex = logo_bttn.style.zIndex+1;
    logo_bttn.querySelector('img').style.borderRadius = '50%';

    // TODO create round div with zindex below img bttn and put boxshadow to it
    var hider = document.createElement('div');
    hider.appendChild(document.createElement('div'));
    hider.appendChild(document.createElement('div'));
    navbar.appendChild(hider);
    hider.style.position = 'absolute';
    hider.style.height = navbar.style.height;
    hider.style.width = hider.style.height ;
    hider.style.top = logo_bttn.style.top;
    hider.style.left = logo_bttn.style.left;
    hider.style.margin = logo_bttn.style.margin;

    hider.children[0].style.zIndex = corner_zIndex_base+1;
    hider.children[0].style.position = 'absolute';
    hider.children[0].style.height = navbar.style.height;
    hider.children[0].style.width = hider.style.height ;
    hider.children[0].style.borderRadius = '50%';
    hider.children[0].style.boxShadow = 'rgba(249, 249, 249, 0.95) 0px 0px 0px 17px';
    hider.children[1].style.zIndex = corner_zIndex_base;
    hider.children[1].style.position = 'absolute';
    hider.children[1].style.height = navbar.style.height;
    hider.children[1].style.width = hider.style.height ;
    hider.children[1].style.borderRadius = '50%';
    hider.children[1].style.boxShadow = 'rgba(255, 36, 48, 0.8) 0px 0px 0px 18px';

    //navbar.querySelector('button').querySelector('img').style.boxShadow = 'rgba(249, 249, 249, 0.8) 0px 0px 0px 17px';

    var drop_bttn = null;

    if (drop_bttn == null) {
        // create a rectangular button to be placed at the bottom of the logo on top of it
        console.log(navbar.querySelector('button'));
        drop_bttn = document.createElement('button');
        navbar.appendChild(drop_bttn);
        drop_bttn.id = 'dropdown_button_01';
        drop_bttn = navbar.querySelector('#dropdown_button_01');
        drop_bttn.style.position = 'absolute';
        drop_bttn.style.width = (parseFloat(navbar.style.height) * 70 / 100).toString() + 'px';
        drop_bttn.style.height = drop_bttn.style.width;
        drop_bttn.style.borderRadius = '50% 50% 50% 50%';
        drop_bttn.style.backgroundColor = 'rgba(0,0,0,0.5)';
        drop_bttn.style.padding = '0px'; //fixing default padding
        drop_bttn.style.border = '0px'; //fixing default border
        drop_bttn.style.cursor = 'crosshair';
        drop_bttn.style.zIndex = corner_zIndex_base+2;
        drop_bttn.addEventListener('mouseenter', function () {
            console.log('drop_bttn mouse overed');
            drop_bttn_isactive = true;
            hotcorner_state = true;
        });
        drop_bttn.addEventListener('mouseleave', function () {
            console.log('drop_bttn mouse unovered');
            drop_bttn_isactive = false;
            //mouse0ut();
        });
        //drop_bttn.style.backgroundImage = "url('/images/final_4.png')";

        drop_bttn.style.top = ((parseFloat(navbar.style.height) * 25 / 100)).toString() + 'px';
        drop_bttn.style.left = (parseFloat(navbar.style.height) - parseFloat(drop_bttn.style.top)).toString() + 'px';
    }

    var hotcorner_state = false;

    var logo_bttn_isactive = false;
    var drop_bttn_isactive = false;
    
    //ele = document.createElement('img');
    //navbar.querySelector('button').appendChild(ele);
    // default style
    //ele.src = "/images/final_4.png";
    //ele.style.maxHeight = "100%";
    //ele.href = "#home";
    //ele.className = "active";
    //ele.style.boxShadow = '0px 0px 4px 20px rgba(0,0,0,0.05)';
    // on hover

    logo_bttn.onclick = function () {
        window.open(URL = home_url, nam = "_self")
    };
    drop_bttn.onclick = function () {
        console.log('small button clicked');
    }

}