/**
 * Created by AdeleSun on 19/04/2016.
 */
window.onload=function() {
    var oImage=document.getElementById('image');
    var oProverb=document.getElementById('proverb');
    var oSentence=document.getElementById('sentence');
    var oName=document.getElementById('name');
    var boxBlur1=0;
    var boxBlur2=0;
    var boxBlur3=0;
    var boxHeight3=0;
    var boxBlur4=0;
    var boxHeight4=0;

    oImage.onclick=function() {
        boxBlur1=boxBlur1+5;
        oImage.style.boxShadow='0 0 10px '+boxBlur1+'px rgba(0, 1, 0, 0.34902)';
    }

    oProverb.onclick=function() {
        boxBlur2=boxBlur2+5;
        oProverb.style.boxShadow='0 0 10px '+boxBlur2+'px gray';
        return false;
    }

    oSentence.onclick=function(ev) {
        var oEvent=ev||event;
        boxBlur3=boxBlur3+3;
        boxHeight3=boxHeight3+3;
        //oEvent.cancelBubble=true;
        oEvent.stopPropagation();
        oSentence.style.textShadow='0 '+boxHeight3+'px '+boxBlur3+'px black';
        return false;
    }

    oName.onclick=function(ev) {
        var oEvent=ev||event;
        boxBlur4=boxBlur4+3;
        boxHeight4=boxHeight4+1;
        //oEvent.cancelBubble=true;
        oEvent.stopPropagation();
        oName.style.textShadow='0 '+boxHeight4+'px '+boxBlur4+'px black';
        return false;
    }

}