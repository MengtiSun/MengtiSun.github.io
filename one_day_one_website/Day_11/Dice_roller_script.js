/**
 * Created by AdeleSun on 21/04/2016.
 */
window.onload=function() {
    var oTopic=document.getElementById('topic');
    var oDice1=document.getElementById('dice1');
    var oDice2=document.getElementById('dice2');
    var aDice1Roll=oDice1.getElementsByTagName('div');
    var aDice2Roll=oDice2.getElementsByTagName('div');
    var oBtn=document.getElementById('btn');

    oBtn.onmouseup=function() {
        oTopic.innerHTML='Shake, shake, shake...';
        oTopic.className='shake';
        oBtn.style.boxShadow='1px 1px 2px gray';
        setTimeout(function() {
            oTopic.className='';
            var number1=Math.round(Math.random()*5);
            var number2=Math.round(Math.random()*5);
            rollingDice(aDice1Roll,number1);
            rollingDice(aDice2Roll,number2);
            var number=number1+1+number2+1;
            oTopic.innerHTML=number;
        },1100);
    }

    oBtn.onmousedown=function() {
        oBtn.style.boxShadow='-1px -1px 3px black';
    }

    function rollingDice(arr,num) {
        switch (num) {
            case 0:
                arr[0].style.display='none';
                arr[1].style.display='none';
                arr[2].style.display='none';
                arr[3].style.display='none';
                arr[4].style.display='none';
                arr[5].style.display='none';
                arr[6].style.display='block';
                break;
            case 1:
                arr[0].style.display='block';
                arr[1].style.display='none';
                arr[2].style.display='none';
                arr[3].style.display='none';
                arr[4].style.display='none';
                arr[5].style.display='block';
                arr[6].style.display='none';
                break;
            case 2:
                arr[0].style.display='block';
                arr[1].style.display='none';
                arr[2].style.display='none';
                arr[3].style.display='none';
                arr[4].style.display='none';
                arr[5].style.display='block';
                arr[6].style.display='block';
                break;
            case 3:
                arr[0].style.display='block';
                arr[1].style.display='none';
                arr[2].style.display='block';
                arr[3].style.display='block';
                arr[4].style.display='none';
                arr[5].style.display='block';
                arr[6].style.display='none';
                break;
            case 4:
                arr[0].style.display='block';
                arr[1].style.display='none';
                arr[2].style.display='block';
                arr[3].style.display='block';
                arr[4].style.display='none';
                arr[5].style.display='block';
                arr[6].style.display='block';
                break;
            case 5:
                arr[0].style.display='block';
                arr[1].style.display='block';
                arr[2].style.display='block';
                arr[3].style.display='block';
                arr[4].style.display='block';
                arr[5].style.display='block';
                arr[6].style.display='none';
                break;
            default :
                return false;
        }
    }
}