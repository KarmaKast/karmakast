function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.type = "text/javascript";
    script.onload = () => callback(script);
    document.head.append(script);
}