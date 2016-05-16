/**
 * Created by AdeleSun on 19/04/2016.
 */
window.onload=function() {
    var oWrapper=document.getElementById('wrapper');
    var aDiv=oWrapper.getElementsByTagName('div');

    for(var i=0;i<aDiv.length;i++) {
        aDiv[i].onmouseover=function() {
            var num1=Math.round(255*Math.random());
            var num2=Math.round(255*Math.random());
            var num3=Math.round(255*Math.random());
            console.log('rbg('+num1+','+num2+','+num3+')');
            this.style.background='rgb('+num1+','+num2+','+num3+')';
            this.style.boxShadow='0 0 8px white';
        }

        aDiv[i].onmouseout=function() {
            this.style.boxShadow='';
        }
    }

}