/**
 * Created by AdeleSun on 13/05/2016.
 */
$(document).ready(function() {

    $('body').on('click',function() {
        $('.text').focus();
    })
    var opacity=1;

    $('.text').on('keypress',function() {

        var timer=null;
        $('#intro').fadeOut();
        $('.text').css('height','400px');
        $('.text').css('top','10px');
        $('.text').css('paddingTop','30px');


        $('.info').fadeIn('slow');
        //clearInterval(timer);
        //timer=setInterval(function() {
        //    $('#intro').css('opacity',opacity);
        //    opacity-=0.05;
        //},50);
        //if(opacity<0) {
        //    $('#intro').css('display','none');
        //    clearInterval(timer);
        //}
    })

    var num=0;

    $('.text').on('keyup',function() {
        num++;
        var size = 130*(Math.pow(Math.pow(1/13, (1/250)), num));
        //$('.text').css('fontSize',);
        $('.text').css('fontSize',size+'px');

        $('.info').html('Character Count: '+num);

        if(num>=30) {
            $('.info').css('backgroundColor','blue');
        }

        if(num>=50) {
            $('.info').css('backgroundColor','red');
        }



    })


})