var home_url = "";

function loadScript(src, callback){
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script);
    document.head.append(script);
}

function load_index() {
    document.body.style.margin = "0px";
    home_url = window.location.href;
    console.log(home_url);
    //create_navbar()
    loadScript('/front/commons/navbar.js', function() {
        create_navbar();
    });
}
