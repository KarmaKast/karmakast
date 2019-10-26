function create_navbar() {

    var navbar = document.createElement("div");
    document.body.appendChild(navbar);

    navbar.id = 'navbar';
    navbar.style.height = '50px';
    //navbar.style.background ='rgba(230,230,230,0.8)';
    navbar.style.position = "sticky";
    navbar.style.zIndex = 5;

    /*filter seems to apply on children too. so created new div and applying on that*/

    var ele = document.createElement('div');
    navbar.appendChild(ele);
    ele.style.height = '100%';
    ele.style.width = '100%';
    ele.style.background = 'rgba(230,230,230,0.8)';
    ele.style.filter = 'blur(15px)';
    ele.style.zIndex = 5;
    //navbar.style.filter = 'blur(8px)';

    /* add logo button at the left corner */
    loadScript('/front/commons/hotcorner.js', function() {
        create_logo_hotcorner();
    });
    
    //document.getElementById
}