/**
 * Created by AdeleSun on 18/05/2016.
 */
$(document).ready(function() {
    var currentClass='rain_drops';

    makeRain();
    raining();

    $('#water').on('click',function() {
        $('.one').removeClass(currentClass);
        $('.one').addClass('rain_drops');
        currentClass='rain_drops';
    })

    $('#love').on('click',function() {
        $('.one').removeClass(currentClass);
        $('.one').addClass('heart_drops');
        currentClass='heart_drops';
    })

    $('#bacon').on('click',function() {
        $('.one').removeClass(currentClass);
        $('.one').addClass('bacon_drops');
        currentClass='bacon_drops';
    })



    function makeRain() {
        for(var i=0;i<150;i++) {
            var oDiv='<div class="one rain_drops" id="drop_' + i + '"></div>';
            $('.drops').append(oDiv);
            $('#drop_'+i).css('left',randowPos(250));
        }

    }

    function raining() {
        setInterval(function() {
            $('#drop_'+randowPos(150)).addClass('dropping');
        },150);
    }



    function randowPos() {
        return Math.floor(Math.random()*250);
    }



})