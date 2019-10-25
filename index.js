var home_url = "";

function create_buttonImg(button, img_path) {
    img_ = document.createElement('img');
    button.appendChild(img_);
    img_.src = img_path;
    img_.style.maxHeight = "100%";
}

function create_navbar() {
    var ele = null;
    var navbar = document.createElement("div");
    document.body.appendChild(navbar);

    navbar.id = 'navbar';
    navbar.style.height = '50px';
    //navbar.style.background ='rgba(230,230,230,0.8)';
    navbar.style.position = "sticky";

    /*filter seems to apply on children too. so created new div and applying on that*/
    ele = document.createElement('div');
    navbar.appendChild(ele);
    ele.style.height = '100%';
    ele.style.width = '100%';
    ele.style.background = 'rgba(230,230,230,0.8)';
    ele.style.filter = 'blur(15px)';
    //navbar.style.filter = 'blur(8px)';

    /* add logo button at the left corner */
    ele = document.createElement('button');
    navbar.appendChild(ele);
    // default
    ele.style.position = 'absolute';
    ele.style.top = '0px';
    ele.style.height = navbar.style.height;
    ele.style.width = navbar.style.height;
    //ele.style.maxHeight = "100%";
    //ele.style.maxWidth = navbar.style.height;
    ele.style.padding = '0px'; //fixing default padding
    ele.style.margin = '5px 0px 0px 5px';
    ele.style.backgroundColor = 'rgba(0,0,0,0)'; //fixing default bg color
    ele.style.border = '0px'; //fixing default border
    ele.style.borderRadius = '50%';
    //ele.style.boxShadow = '0px 0px 4px 20px rgba(0,0,0,0.05)';
    // on hover/ mouse over -> increase size
    var original_size = null; // original_height
    var drop_bttn = null;
    var drop_bttn_diffs = [0, 0];
    
    function mouse0ver() {
        // navbar.children[1] -> button
        // navbar.children[1].children[0] -> image
        currHeight = parseFloat(navbar.children[1].style.height);
        if (original_size == null) {
            original_size = currHeight;
            console.log(original_size);
        }
        newHeight = currHeight + currHeight * 20 / 100;
        console.log(newHeight);
        navbar.querySelector('button').style.height = newHeight.toString() + 'px';
        navbar.querySelector('button').style.width = newHeight.toString() + 'px';
        navbar.querySelector('button').style.cursor = "pointer";
        
        if (drop_bttn != null) {
            // update dropdown size and location to match logo size and position change
            var diff = newHeight - currHeight;
            drop_bttn.style.top = (parseFloat(drop_bttn.style.top) + diff) + 'px';
            drop_bttn_diffs[0] = parseFloat(drop_bttn.style.height) * 140 / 100;
            drop_bttn_diffs[1] = parseFloat(drop_bttn.style.width) * 15 / 100;
            console.log(drop_bttn_diffs);
            drop_bttn.style.height = (parseFloat(drop_bttn.style.height) + drop_bttn_diffs[0]) + 'px';
            drop_bttn.style.width = (parseFloat(drop_bttn.style.width) + drop_bttn_diffs[1]) + 'px';
        }
    }
    //ele.querySelector("img");
    function mouse0ut() {
        currHeight = parseFloat(navbar.children[1].style.height);
        newHeight = original_size;
        console.log(newHeight);
        navbar.querySelector('button').style.height = newHeight.toString() + 'px';
        navbar.querySelector('button').style.width = newHeight.toString() + 'px';
        //navbar.children[1].children[0].style.boxShadow = '0px 0px 0px 0px rgba(0,0,0,0)';
        if (drop_bttn != null) {
            // update dropdown size and location to original value
            drop_bttn.style.top = (parseFloat(drop_bttn.style.top) - (currHeight - newHeight)) + 'px';
            drop_bttn.style.height = (parseFloat(drop_bttn.style.height) - drop_bttn_diffs[0]) + 'px';
            drop_bttn.style.width = (parseFloat(drop_bttn.style.width) - drop_bttn_diffs[1]) + 'px';
        }
    }
    // with mouse
    ele.addEventListener('mouseover', mouse0ver);
    ele.addEventListener('mouseout', mouse0ut);
    //with touch
    /*
    press logo to load main page
    hold logo and drag it down to reveal drop down
    */
    ele.style.boxShadow = 'rgba(255, 36, 48, 0.8) 0px 0px 0px 18px';
    //ele.style.boxShadow = '0px -20px 20px -5px rgba(255,36,48,0.8) inset';
    // 
    /*
    currHeight = parseFloat(ele.style.height);
    newHeight = currHeight + currHeight*20/100;
    console.log(newHeight);
    ele.style.height = '420%';*/
    //ele.style.boxShadow = '0px 0px 4px 20px rgba(254,37,48,0.8)';
    //ele.style.opacity = '0';

    // logo image

    create_buttonImg(navbar.querySelector('button'), "/images/final_4.png");

    if (drop_bttn == null) {
        // create a rectangular button to be placed at the bottom of the logo on top of it
        console.log(navbar.querySelector('button'));
        navbar.querySelector('button').appendChild(document.createElement('button'));
        navbar.querySelector('button').querySelector('button').id = 'dropdown_button';
        drop_bttn = navbar.querySelector('#dropdown_button');
        drop_bttn.style.position = 'absolute';
        drop_bttn.style.height = (parseFloat(navbar.style.height) * 14 / 100).toString() + 'px';
        drop_bttn.style.width = (parseFloat(navbar.style.height) * 70 / 100).toString() + 'px';
        drop_bttn.style.borderRadius = '0px 0px 50% 50%';
        drop_bttn.style.backgroundColor = 'rgba(0,0,0,0.1)';
        drop_bttn.style.padding = '0px'; //fixing default padding
        drop_bttn.style.border = '0px'; //fixing default border
        drop_bttn.style.cursor = 'crosshair';
        //drop_bttn.style.backgroundImage = "url('/images/final_4.png')";

        drop_bttn.style.top = (parseFloat(navbar.style.height) - (parseFloat(navbar.style.height) * 18 / 100)).toString() + 'px';
        drop_bttn.style.left = (parseFloat(navbar.style.height) - parseFloat(drop_bttn.style.top)).toString() + 'px';
    }
    //ele = document.createElement('img');
    //navbar.querySelector('button').appendChild(ele);
    // default style
    //ele.src = "/images/final_4.png";
    //ele.style.maxHeight = "100%";
    //ele.href = "#home";
    //ele.className = "active";
    navbar.querySelector('button').querySelector('img').style.borderRadius = '50%';
    navbar.querySelector('button').querySelector('img').style.boxShadow = 'rgba(249, 249, 249, 0.8) 0px 0px 0px 17px';
    //ele.style.boxShadow = '0px 0px 4px 20px rgba(0,0,0,0.05)';
    // on hover

    ele.onclick = function () {
        window.open(URL = home_url, nam = "_self")
    };
    drop_bttn.onclick = function () {
        console.log('small button clicked');
    }

    //document.getElementById
}

function load_index() {
    document.body.style.margin = "0px";
    home_url = window.location.href;
    console.log(home_url);
    create_navbar()
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdown_toggle() {
    document.getElementById("dropdown-content").classList.toggle("show");
}