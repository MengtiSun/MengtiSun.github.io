/**
 * Created by AdeleSun on 17/05/2016.
 */
$(document).ready(function() {
    var aColors=['green','red','yellow','blue'];
    var level=1;
    var aPattern=[];
    var count=0;

    $('.btn1').on('click',function() {
        $('.intro').css('display','none');
        $('.game').css('display','block');
        $('.circle').css('display','block');
        $('.home').css('top','90%');
        startPlay();
    });


    function startPlay() {
        $('#level').html('Level '+level);
        setTimeout(function() {
            aPattern.push(aColors[Math.floor(Math.random()*4)]);
                flashPattern();
        },500);
    }

    function flashPattern() {
        setTimeout(function() {
            if(count<aPattern.length) {
                changeColor(aPattern[count]);
                count++;
                flashPattern();

            }
            else {
                count=0;
                makeSimon();
            }

        },500);
    }


    function changeColor(color) {
            $('.'+color).addClass('light_'+color);
            setTimeout(function() {
                $('.'+color).removeClass('light_'+color);
                makeSound(color);
            },300)
    }

    function makeSound(color) {
        var url=color+'.wav';
        var sound=document.getElementById('sound');
        sound.innerHTML='<audio class="sound" autoplay><source src='+url+' type="audio/wav"></audio>'

    }

    function makeSimon() {
        var n=0;
        console.log(aPattern);
        $('.pad').on('click',function() {
            console.log(aPattern);
            var color=$(this).attr('class').split(' ')[1];
            changeColor(color);

            if (color!=aPattern[n]) {
                $('body').css('backgroundColor','red');
                makeSound('fail');
                $('.pad').off();
                setTimeout(function() {
                    $('body').css('backgroundColor','black');
                },500);
                level=1;
                aPattern=[];
                setTimeout(function() {
                    startPlay();
                },800);
            }
            else if (n==aPattern.length-1) {
                $('.pad').off();
                level++;
                setTimeout(function() {
                    startPlay();
                },500);
            }
            else {
                n++;
            }
        });
    }

})














