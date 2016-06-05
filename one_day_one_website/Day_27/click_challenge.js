/**
 * Created by AdeleSun on 19/05/2016.
 */
$(document).ready(function() {
    $('.btn').on('click',function() {
        $('.intro').css('display','none');
        $('.game').css('display','block');

        var clicks = 0;
        $('body').css('cursor', 'pointer');
        $('body').attr('unselectable', 'on');
        $('body').css('user-select', 'none');
        $('body').on('selectstart', false);

        $('.spinner').addClass('spinner_animate');
        $('.fill').addClass('fill_animate');
        $('.hide').addClass('hide_animate');

        $(document).on('click',function() {
            $('.counter').html(clicks);
            clicks++;
        })

        setTimeout(function() {
            $('.game').css('display','none');
            $('.result').css('display','block');
            $('.clicks').html('You got '+(clicks-1)+' clicks.');
            var average=parseInt((clicks-1)*100/10)/100;
            $('.average').html('That\'s '+average+' clicks per second!');



            $('.spinner').removeClass('spinner_animate');
            $('.fill').removeClass('fill_animate');
            $('.hide').removeClass('hide_animate');
        },10000);
    })
})

