/**
 * Created by AdeleSun on 21/04/2016.
 */
window.onload=function() {
    var oContent=document.getElementById('content');
    var arr=['were younger.',
            'were thinner.',
            'had a faster processor.'];
    var timer=null;
    var counter=0;

    click();

    timer=setInterval(click ,800);

    function click() {
        oContent.innerHTML=arr[counter];
        counter++;
        if(counter==3) {
            counter=0;
        }
    }

}



