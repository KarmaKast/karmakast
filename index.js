var home_url = "";
var gStyle = null;
//gStyle.id = 'gStyle'; //page global style
var console_log = [];





function load_index() {
    // TODO check device
    $(document).ready(function () {
        console.log("ready!");
        var meta = document.createElement('meta');
        document.head.appendChild(meta);
        meta.setAttribute('charset', 'utf-8');
        meta.setAttribute('content', 'width=device-width, initial-scale=1.0');
        meta.name = 'viewport';

        gStyle = document.createElement('style');
        $(gStyle).attr("id", "gStyle");

        document.head.appendChild(gStyle);

        document.body.style.margin = "0px";
        home_url = window.location.href;
        /*
        loadScript('/front/commons/responsive.js', () => {
            setup_listeners();
            mode_listener(mode_min_320);
            mode_listener(mode_min_768);
            mode_listener(mode_min_1024);
            get_mode();
        });*/

        $.getScript("/front/commons/responsive.js", () => {
            setup_listeners();
            try {
                mode_listener(mode_min_768);
                mode_listener(mode_min_1024);
                get_mode();
                mode_listener(mode_min_320);
            } catch (error) {
                console_.log(error);
            }
        });
        $.getScript("/front/commons/navbar.js", () => {
            //create_navbar(contentdiv);
            //document.body.style.backgroundColor = 'red';
            create_navbar();

        });
    });





    /*responsive_worker.onmessage = (msg) => {
        console.log('message received from worker !!!');
        console.log(msg);
    }*/
    //console.log(get_mode());
    //$()

    //console.log(home_url);
    //create_navbar()
    /*
    loadScript('/front/commons/navbar.js', function () {
        //create_navbar(contentdiv);
        create_navbar();
    });*/

    // ------------------ DEV CORNER --------------------------
    var dev_corner_div = document.createElement('div');
    document.body.appendChild(dev_corner_div);


    $(dev_corner_div).css({
        "position": "fixed",
        "height": "100%",
        "width": "100%",
        "backgroundColor": "rgba(0,0,0,0)",
        "z-index": "20",
        "pointer-events": "none",
    });
    $(dev_corner_div).attr("id", "dev_corner_div");
    //dev_corner_div.style.pointerEvents

    var version_ = document.createElement('p');
    dev_corner_div.appendChild(version_);
    $(version_).css({
        "position": "absolute",
        "top": "0px",
        "right": "5px",
        "color": "rgb(150,150,150)",
        "z-index": "20",
    });
    version_.innerHTML = '0.0.4';

    var console_ = document.createElement('p');
    dev_corner_div.appendChild(console_);
    $(console_).css({
        "background-color": "rgba(0,0,0,0.2)",
        "position": "absolute",
        "bottom": "0px",
        "margin": "2%",
        "height": "25%",
        "width": "96%",
        "z-index": "21",
    });
    console_.innerHTML = '$(console_log)';
    //version_.style.color = 'rgb(150,150,150)';

    //version_div.children[0].style.textEmphasisColor = 'rgb(200,200,200)';


}

var contentdiv = document.createElement('div');
// wait for navbar to be created
//document.body.appendChild(contentdiv);
contentdiv.id = 'page_content';
contentdiv.innerHTML += `<div id='lipsum'>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non semper elit. Quisque laoreet diam a metus lobortis facilisis. Proin faucibus ipsum at nisl ullamcorper scelerisque. Maecenas dignissim, tellus sit amet viverra ornare, augue dui facilisis velit, ut maximus nibh lectus id turpis. Aliquam interdum tincidunt facilisis. Aenean consequat at nisl quis feugiat. Fusce imperdiet et augue sed cursus. Phasellus tempus volutpat lobortis. Morbi iaculis congue lorem et lobortis. Ut id est neque. Donec tincidunt tortor sit amet tellus tincidunt pharetra. Fusce non ante quis arcu laoreet dignissim. Aliquam non tortor non odio rutrum posuere a nec velit. Duis et consectetur ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
</p>
<p>
Cras fringilla libero ut mattis tristique. Vivamus eleifend accumsan nibh, vitae convallis est suscipit in. Sed consequat elit id diam dignissim suscipit. Nulla facilisi. Ut eget purus ultricies, tristique nisl quis, ullamcorper elit. Phasellus blandit mauris id orci tempor feugiat pharetra imperdiet nisl. Integer aliquet vulputate interdum. Cras felis augue, mollis non tortor sit amet, tempor pharetra augue. Vestibulum pharetra, leo non lacinia dapibus, nibh nulla semper magna, eget blandit ligula justo non nunc. Duis elementum leo elit, in pharetra sem sagittis sed. Fusce vitae elit maximus, vestibulum velit sit amet, luctus neque. Nulla sodales ullamcorper ipsum in gravida. Sed eu eros ex.
</p>
<p>
Aenean accumsan vulputate tellus sit amet tempor. In id finibus lectus. Proin in aliquet nulla, sed sodales augue. Duis suscipit tincidunt turpis, ultrices sagittis justo porttitor at. In fermentum hendrerit tortor id sagittis. Nunc sagittis maximus massa, quis mattis orci vehicula non. In hac habitasse platea dictumst. Aenean convallis, dolor non posuere aliquet, sapien arcu facilisis augue, sed bibendum arcu arcu in arcu. Pellentesque laoreet accumsan vestibulum. Morbi eget consectetur mi. Fusce vulputate odio sit amet purus lacinia ullamcorper. Duis placerat urna ultricies neque ullamcorper, ut vestibulum sapien luctus.
</p>
<p>
In hac habitasse platea dictumst. Phasellus consequat, mi aliquet mollis scelerisque, ligula velit laoreet lacus, ac fringilla orci eros ac ante. Nunc turpis eros, pulvinar a accumsan porttitor, commodo vel nisi. Maecenas risus justo, sodales a arcu in, eleifend commodo nisl. Mauris sit amet velit mauris. Phasellus ac tincidunt lacus, a malesuada purus. Suspendisse quis ligula tellus. Nullam dapibus nisl vel auctor accumsan.
</p>
<p>
Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi dictum rhoncus leo, eget imperdiet orci ultrices id. Cras pulvinar justo eu lacus hendrerit facilisis. Vivamus convallis, ipsum sed feugiat pulvinar, tellus tortor scelerisque nisi, quis venenatis ipsum enim a eros. Maecenas condimentum non lorem et euismod. Ut dignissim, eros a porta placerat, nibh magna egestas lectus, ut congue dui velit non sapien. Sed vitae libero nulla. Donec nisi quam, maximus quis velit eget, dapibus laoreet mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed rutrum mauris at urna bibendum, sed pretium neque mollis. Pellentesque vitae feugiat sapien. Sed odio sapien, congue sit amet tristique sed, suscipit ac erat. Donec ornare turpis non magna dictum convallis. Nullam eu tempor nisl.
</p>
<p>
Mauris eget lacus ipsum. Quisque viverra neque velit, ac sodales mauris eleifend malesuada. Pellentesque sed magna dolor. Nunc pellentesque eget felis molestie accumsan. Etiam aliquam risus risus, ut ornare tortor ornare et. Maecenas enim ex, hendrerit id dolor eu, rhoncus condimentum tellus. Curabitur congue malesuada nunc id luctus. Mauris hendrerit elit sit amet massa consequat dictum.
</p>
<p>
In vitae felis vel sem cursus fringilla at vestibulum nibh. Curabitur non tristique sem, sit amet viverra augue. Aenean nisl est, pretium quis risus eu, viverra pellentesque lectus. Vivamus aliquam diam ut neque congue pharetra. Phasellus erat dui, scelerisque at est eget, ornare commodo metus. Integer odio mauris, cursus et sollicitudin id, congue non ipsum. Quisque gravida, felis ac congue eleifend, eros neque sollicitudin lorem, at luctus mauris elit nec orci.
</p>
<p>
Ut rutrum nec dolor nec interdum. Nunc sollicitudin pellentesque diam ac tristique. Pellentesque non ante at nunc vestibulum vulputate. Nulla sagittis in massa et feugiat. Vestibulum molestie orci mi, in efficitur quam volutpat eu. Etiam id justo ultrices, feugiat nisi in, commodo arcu. Donec egestas aliquam tortor, a porta risus tempor eu. Mauris consectetur orci eu lectus tristique finibus. Phasellus fringilla sapien turpis, ut gravida dolor consequat cursus. Nulla facilisi.
</p>
<p>
Etiam posuere tellus at diam sagittis, eu maximus eros auctor. Nulla ut mauris sit amet mauris lobortis euismod ac sed neque. Etiam bibendum velit vel tortor porta ornare. Phasellus est quam, consequat nec elementum auctor, mattis a ex. Sed eget ipsum ultrices eros volutpat hendrerit. Suspendisse quam nisi, ornare non sem quis, mollis imperdiet enim. Aliquam pellentesque quam tortor, sed congue risus placerat ac. Sed ligula elit, tincidunt pretium ante ut, interdum aliquam arcu. Quisque in tellus sit amet lorem posuere feugiat. Quisque et velit nec tellus convallis dignissim. Maecenas congue velit gravida mattis convallis. Vestibulum gravida ut velit a scelerisque. Cras varius, ligula eu fringilla feugiat, tellus nunc sodales ligula, in consequat ligula ante sed sapien. Praesent vitae neque eu massa iaculis viverra.
</p>
<p>
Praesent consequat justo at arcu scelerisque, a pharetra ligula cursus. Integer commodo dui sed est porta, a molestie odio ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In lobortis pellentesque sollicitudin. Etiam lacinia nisi orci, sed eleifend sapien fringilla sit amet. Curabitur feugiat sapien sed convallis bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla venenatis facilisis felis a ornare. Donec eu consectetur ipsum, ut vulputate felis. Nullam faucibus molestie pharetra. Fusce luctus diam tellus, eu interdum mi molestie a. Nunc finibus felis ex, sed fringilla odio mollis quis.
</p>
<p>
Nam ultricies nunc purus, eget consequat risus blandit ac. Sed sit amet blandit elit, nec posuere ligula. Nulla eget massa a tortor congue suscipit. Ut pharetra placerat mi, in fermentum dui mollis eu. Integer odio ante, condimentum vel justo vitae, ullamcorper facilisis lacus. Donec ultricies convallis justo sed pretium. Integer risus quam, accumsan vitae aliquet sit amet, varius at velit. Ut elementum efficitur augue a auctor. Phasellus vestibulum risus venenatis lacus varius mollis sed vel massa. Phasellus vitae auctor nibh. Vestibulum iaculis libero sit amet sapien dignissim semper. Aliquam id felis nec elit volutpat ultricies. Duis fringilla volutpat sem id fringilla.
</p>
<p>
Aliquam erat volutpat. Aliquam at eleifend dui. Sed nec dolor massa. Ut ac magna tempus, dictum tellus sit amet, vehicula nisi. Nunc nec laoreet massa. Suspendisse egestas tempor dapibus. Etiam eu sapien eu arcu ullamcorper aliquam. Proin nec ultricies dui. Suspendisse ultricies ex ac eros tempor, id hendrerit ex eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus facilisis sollicitudin massa, vitae mattis quam facilisis vel. Aenean quis ultricies risus. Duis vitae ante imperdiet neque cursus blandit quis in augue. Nam volutpat purus mi, ac porta nulla pellentesque eu.
</p>
<p>
Nulla facilisi. Sed porttitor, ante eu dapibus porta, mi leo aliquet lectus, id commodo sem diam at massa. Cras efficitur nisl nunc, eget gravida leo mollis sed. Pellentesque id ante eu odio eleifend porttitor ac a turpis. Donec tempor urna molestie cursus blandit. Etiam turpis justo, tincidunt sed tempus quis, hendrerit sit amet elit. Phasellus lobortis orci nec ante gravida ultricies. Maecenas fermentum nulla ac fringilla posuere. Vivamus fringilla nunc vel malesuada consectetur.
</p>
<p>
Praesent fermentum molestie velit, sit amet tempor magna. Cras ac nisl interdum nibh luctus fermentum. Integer nisl dui, fringilla eget euismod volutpat, elementum sed justo. Morbi vitae vehicula magna. Quisque ultricies magna in tortor fermentum accumsan. Curabitur rutrum, magna ac viverra dignissim, ipsum ligula aliquam eros, non porta nisi nunc ut est. In efficitur fringilla tortor a porta. Duis tempor velit tortor, vel tristique mi blandit sed. Curabitur vel ultrices leo. Duis auctor elit molestie mi rutrum egestas. Nam volutpat eget turpis quis volutpat. Donec pretium, neque ut consectetur cursus, tortor est luctus diam, vel sagittis mauris dui sit amet augue. Ut convallis iaculis quam, eget placerat ipsum accumsan ac. Aenean a porttitor orci.
</p>
<p>
Vestibulum hendrerit eros nec consectetur feugiat. Duis vel nulla vel ex scelerisque egestas. Nullam non ipsum neque. Nullam gravida eros ut dignissim gravida. Vivamus eget felis mi. Sed dignissim neque non consectetur eleifend. Nunc ullamcorper sollicitudin turpis a interdum.
</p>
<p>
Nullam sed placerat enim, pellentesque laoreet tortor. Proin sit amet metus vel tortor porttitor sollicitudin. Pellentesque volutpat lobortis tortor a laoreet. Praesent dolor nulla, molestie at blandit vel, efficitur blandit quam. Aliquam fringilla elit leo, vitae rutrum neque feugiat at. Sed nec dolor venenatis, faucibus dolor et, tincidunt dui. Nunc congue ipsum dictum pellentesque ultrices. In tincidunt ornare est id laoreet. Nunc lobortis, nibh eget lobortis tincidunt, augue lorem venenatis ante, ut dignissim arcu velit et leo. Vestibulum eget finibus eros, eget pulvinar quam. Sed vehicula, nulla sed commodo fermentum, odio arcu mollis quam, eu feugiat sapien mi eu magna. Pellentesque sed orci et nisl condimentum rutrum. Morbi lacinia nisl libero, id eleifend lorem aliquam quis. Vestibulum ut dolor sit amet magna ullamcorper sodales ac vel tellus.
</p>
<p>
Vestibulum sed lacus et diam interdum tempus. Curabitur hendrerit porttitor nibh non tempus. Sed tempor nisi enim, at tincidunt nibh vehicula sed. Nulla facilisi. Sed condimentum tristique ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla neque purus, porta et risus eu, mollis sollicitudin enim. Phasellus nec ultricies ante. Ut consequat dignissim velit, a aliquet dui sollicitudin vitae. Proin nec ipsum arcu. Donec metus nisi, mollis a ex eu, dignissim pulvinar leo. Maecenas a volutpat urna.
</p>
<p>
Nulla facilisi. Integer feugiat ultricies congue. Quisque pharetra id magna eget ultricies. Etiam porttitor at lorem sit amet posuere. Etiam consectetur eleifend rhoncus. Nulla lacinia, sem id finibus vehicula, felis tellus mollis nunc, in imperdiet dui sem dignissim nunc. Duis ultrices nec sem vitae luctus. Integer interdum est nec purus eleifend fringilla. Maecenas euismod hendrerit tortor, sed sollicitudin risus porttitor non. Maecenas eleifend turpis et porttitor condimentum. Nullam dolor leo, egestas non dui hendrerit, dapibus varius dolor.
</p>
<p>
Vivamus dui odio, rhoncus sed ex quis, accumsan blandit felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu eros commodo, hendrerit dui vel, consequat tortor. Donec sit amet nisl sed sapien porta blandit sit amet at arcu. Curabitur ornare metus et nibh accumsan, sit amet posuere magna eleifend. Nunc a ornare sem. Nullam mollis, neque id condimentum tempor, turpis enim aliquet eros, sed posuere lacus ipsum eu felis. Suspendisse potenti. Sed eget erat urna. Nulla viverra in ligula id facilisis. Phasellus ut odio at lectus vestibulum dignissim.
</p>
<p>
Cras mattis vestibulum quam a interdum. Proin ac ligula suscipit, auctor felis sed, mollis tellus. Integer vitae ligula at libero pharetra porttitor ac dignissim mauris. Aliquam eu porttitor libero, vel porttitor urna. Cras lacinia est ac neque fringilla rutrum. Duis tristique vel nisi eget eleifend. Phasellus eget neque sed felis vehicula ornare. Maecenas porta ornare mi. Vivamus ut orci leo. Donec non vehicula magna. Etiam quam orci, pulvinar sed metus at, vestibulum dignissim nibh. Suspendisse eleifend faucibus libero, sed venenatis lectus. Proin luctus justo at lectus pharetra rutrum. Pellentesque nisl augue, vestibulum in dui vel, posuere bibendum risus. Morbi libero mi, semper sed nisl ac, finibus vehicula tortor. Pellentesque nec nisl eu enim vehicula semper.
</p></div>`