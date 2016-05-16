/**
 * Created by AdeleSun on 28/04/2016.
 */
$('document').ready(function() {
    var aA=document.getElementsByTagName('a');

    for(var i=0;i<aA.length;i++) {
        aA[i].onmouseenter=function() {
            this.className='changeColor1';
        }
        aA[i].onmouseleave=function() {
            this.className='changeColor2';
        }
    }

    //$('.tags').on('mouseenter',function() {
    //    this.className='changeColor4';
    //})
    //
    //$('.tags').on('mouseleave',function() {
    //    this.className='changeColor3';
    //})


})