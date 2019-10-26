var navbar_loaded = false;
function create_navbar(content) {

    var navbar = document.createElement("div");
    document.body.appendChild(navbar);

    navbar.id = 'navbar';
    navbar.style.height = '50px';
    navbar.style.width = '100%';
    //navbar.style.background ='rgba(230,230,230,0.8)';
    navbar.style.position = "fixed";
    navbar.style.top = "0px";
    navbar.style.zIndex = 5;

    /*filter seems to apply on children too. so created new div and applying on that*/

    var ele = document.createElement('div');
    navbar.appendChild(ele);
    ele.style.height = '100%';
    ele.style.width = '100%';
    ele.style.background = 'rgba(230,230,230,0.8)';
    ele.style.filter = 'blur(15px)';
    ele.style.position = 'relative';
    ele.style.zIndex = 5;
    //navbar.style.filter = 'blur(8px)';

    /* add logo button at the left corner */
    loadScript('/front/commons/hotcorner.js', function() {
        create_logo_hotcorner();
    });
    navbar_loaded = true;

    //navbar.style.marginTop
    content.style.marginTop = (parseFloat(navbar.style.height) + 30).toString()+'px';
    
    document.body.appendChild(content);
}