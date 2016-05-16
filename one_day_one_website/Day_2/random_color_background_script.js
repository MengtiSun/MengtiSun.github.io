/**
 * Created by AdeleSun on 14/04/2016.
 */
window.onload=function() {
    var oBtn=document.getElementById('btn');
    var oBody=document.getElementsByTagName('body')[0];

    oBtn.onclick=function() {

        var num1=Math.round(Math.random()*255);
        var num2=Math.round(Math.random()*255);
        var num3=Math.round(Math.random()*255);

        oBody.style.background='rgb('+num1+','+num2+','+num3+')';
    }


}


