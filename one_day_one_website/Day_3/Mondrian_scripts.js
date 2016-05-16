/**
 * Created by AdeleSun on 14/04/2016.
 */
window.onload=function() {
    var oColor_picker=document.getElementById('color_picker').children;

    var oDiv=document.getElementById('canvas').children;

    var color='white';


    for(var i=0;i<oColor_picker.length;i++) {
        oColor_picker[i].onclick=function() {
            color=getStyle(this,'backgroundColor');
        }
    }

    for(var i=0;i<oDiv.length;i++) {
        for(var j=0;j<oDiv[i].children.length;j++) {
            oDiv[i].children[j].onclick=function() {
                this.style.backgroundColor=color;
            }
        }
    }

    function getStyle(obj,name) {
        if(obj.currentStyle) {
            return obj.currentStyle[name];
        }
        else {
            return getComputedStyle(obj,false)[name];
        }
    }
}





