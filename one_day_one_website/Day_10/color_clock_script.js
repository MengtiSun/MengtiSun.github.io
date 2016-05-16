/**
 * Created by AdeleSun on 21/04/2016.
 */
window.onload=function() {
    var oTime=document.getElementById('current_time');
    var oColor=document.getElementById('current_color');
    var oBody=document.getElementsByTagName('body')[0];
    var timer=null;

    clock();

    timer=setInterval(clock,1000);


    function clock() {
        var oDate=new Date();
        var oHour=oDate.getHours();
        var oMinute=oDate.getMinutes();
        var oSecond=oDate.getSeconds();
        var oNum1=oHour*10;
        var oNum2=oMinute*4;
        var oNum3=oSecond*4;
        oTime.innerHTML=toStr(oHour)+':'+toStr(oMinute)+':'+toStr(oSecond);
        oColor.innerHTML=toHex(oNum1)+':'+toHex(oNum2)+':'+toHex(oNum3);
        oBody.style.backgroundColor='#'+toHex(oNum1)+toHex(oNum2)+toHex(oNum3);

    }

    function toStr(num) {
        if(num<10) {
            return '0'+num;
        }
        else {
            return num.toString();
        }
    }

    function toHex(num) {
        if(num<16) {
            return '0'+num.toString(16).toUpperCase();
        }
        else {
            return num.toString(16).toUpperCase();
        }

    }

}


