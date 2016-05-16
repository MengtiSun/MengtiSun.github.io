/**
 * Created by AdeleSun on 24/04/2016.
 */
window.onload= function () {
    var left=document.getElementById('left_img');
    var right=document.getElementById('right_img');
    var middle=document.getElementById('middle');

    var rock=document.getElementById('rock');
    var paper=document.getElementById('paper');
    var scissors=document.getElementById('scissors');
    var arr=['rock','paper','scissors'];
    var arr0=['You win!','Tie!','You lose!'];
    var timer=null;
    var num=0;

    function addShake(obj) {
        right.src="images/right_fist.png";
        left.src="images/left_fist.png";
        left.className='shake';
        right.className='shake';
        var counter=3;

        middle.innerHTML=counter;
        timer=setInterval(function() {
            counter--;
            if(counter==0) {
                middle.innerHTML='shoot!';
                clearInterval(timer);
            }
            else {
                middle.innerHTML=counter;
            }
        },500);

        setTimeout(function() {
            left.className='';
            right.className='';
            num=Math.round(Math.random()*2);
            left.src="images/"+arr[num]+".png";
            right.src="images/"+obj+".png";
        },1510)
        setTimeout(function() {
            switch (obj) {
                case 'rock':
                    switch (num) {
                        case 0:
                            middle.innerHTML = arr0[1];
                            break;
                        case 1:
                            middle.innerHTML = arr0[2];
                            break;
                        case 2:
                            middle.innerHTML = arr0[0];
                            break;
                        default :
                            return false;
                    }
                    break;
                case 'paper':
                    switch (num) {
                        case 0:
                            middle.innerHTML = arr0[0];
                            break;
                        case 1:
                            middle.innerHTML = arr0[1];
                            break;
                        case 2:
                            middle.innerHTML = arr0[2];
                            break;
                        default :
                            return false;
                    }
                    break;
                case 'scissors':
                    switch (num) {
                        case 0:
                            middle.innerHTML = arr0[2];
                            break;
                        case 1:
                            middle.innerHTML = arr0[0];
                            break;
                        case 2:
                            middle.innerHTML = arr0[1];
                            break;
                        default :
                            return false;
                    }
                    break;
            }
        },2100);

    }



    rock.onclick=function() {
        addShake('rock');

    }

    paper.onclick=function() {
        addShake('paper');

    }

    scissors.onclick=function() {
        addShake('scissors');

    }



}