console.log('responsive_worker.js loaded');
onmessage = (msg_obj) => {
    console.log('message received from main script.');
    //console.log(mes_obj.data);
    postMessage(msg_obj.data);
} 