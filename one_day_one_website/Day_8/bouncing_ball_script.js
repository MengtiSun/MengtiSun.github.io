/**
 * Created by AdeleSun on 19/04/2016.
 */
window.onload=function() {
    var oBall=document.getElementById('ball');
    var oFloor=document.getElementById('floor');
    var oSentence=document.getElementById('sentence');
    var oHeading=oSentence.getElementsByTagName('h1')[0];
    var oP=oSentence.getElementsByTagName('p')[0];
    var timer=null;
    var speed=0;
    var direction=1;
    var counter=1;
    var success=1;

    var messages = ["Nice job!",
        "Excellent clickin'!",
        "That was Awesome!",
        "Man are you good!",
        "Boom!",
        "You're a pro!",
        "Unbelievable!",
        "Insanity!",
        "You're on fire!",
        "That was crazy!",
        "You are blowin' my mind!"];

    timer=setInterval(bouncing,30);

    oBall.onclick=function() {
        success++;
        clearInterval(timer);
        oBall.style.display='none';
        oHeading.innerHTML=messages[Math.round(10*Math.random())];
        oP.innerHTML='Next level: '+success;
        oSentence.style.display='block';
        setTimeout(function() {
            oBall.style.top='0';
            var speed=0;
            var direction=1;
            counter=success;
            oBall.style.display='block';
            oSentence.style.display='none';
            timer=setInterval(bouncing,30);
        },2000);
    }

    function bouncing() {
        if(direction==1) {
            speed=counter/4;
            oBall.style.top=oBall.offsetTop+speed+'px';
            if(oBall.offsetTop>=oFloor.offsetTop-133) {
                direction=-1;
            }
            counter=counter+success;
        }
        else if(direction==-1) {
            speed=-counter/4;
            oBall.style.top=oBall.offsetTop+speed+'px';
            counter=counter-success;
            if(oBall.offsetTop<=0) {
                direction=1;
                counter=success;
            }
        }
    }




}




