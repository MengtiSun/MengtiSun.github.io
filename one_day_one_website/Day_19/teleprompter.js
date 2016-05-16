/**
 * Created by AdeleSun on 10/05/2016.
 */
$(document).ready (function() {
    var timer=null;
    $('.submit').on('click',function(ev) {
        var oEvent=ev||event;
        oEvent.preventDefault();
        if($('.text').val()=='') {
            var aValue='You should probably enter some text next time.';
        }
        else {
            var aValue=$('.text').val();
        }

        $('.tele').css('display','none');
        $('.teleprompt').css('display','block');
        $('.content').html(aValue);
        $('span').css('color','#a3a375');
        var speed=1;
        timer=setInterval(function() {
            var top=parseInt($('.content').css('top'));
            top-=speed;
            $('.content').css('top',top+'px');
        },30)
    })


    $('span').on('click',function() {
        $('.tele').css('display','block');
        $('.teleprompt').css('display','none');
        $('span').css('color','white');
        clearInterval(timer);
        $('.text').val('')
        $('.content').html('');
        $('.content').css('top','140px');
    })
})




