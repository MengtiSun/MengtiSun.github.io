/**
 * Created by AdeleSun on 4/05/2016.
 */
$(document).ready(function() {
    var posX=0;
    var posY=0;
    $(document).on('mousemove',function(ev) {
        var oEvent=ev||event;
        posX=oEvent.clientX;
        posY=oEvent.clientY;
    })

    //for(var i=0;i<16;i++) {
    //        var l=0;
    //        var t=0;
    //        var speed=Math.floor(Math.random()*50+3);
    //        var loop=setInterval((function() {
    //            l=l+(posX-l)/speed;
    //            t=t+(posY-t)/speed;
    //            $("#circle"+i).css({left:l, top:t});
    //        })(),3);
    //}


    for(var i=0;i<16;i++) {
        move("#circle"+i);
    }

    function move(spot) {
        var l=0;
        var t=0;
        var speed=Math.floor(Math.random()*50+3);
        var loop=setInterval(function() {
            l=l+(posX-l)/speed;
            t=t+(posY-t)/speed;
            $(spot).css({left:l, top:t});
        },30);
    }


})










