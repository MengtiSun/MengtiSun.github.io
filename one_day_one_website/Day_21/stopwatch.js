/**
 * Created by AdeleSun on 12/05/2016.
 */
$(document).ready(function() {
    var oHour=0;
    var oMinute=0;
    var oSecond=0;
    var timer=null;

    $('#start').on('click',function() {
        $('#start').attr('disabled',true);
        timer=setInterval(function() {
            oSecond++;
            if(oSecond==60) {
                oSecond=0;
                oMinute++;
            }
            if(oMinute==60) {
                oMinute=0;
                oHour++;
            }
            showDigit('.seconds_first',parseInt(oSecond/10));
            showDigit('.seconds_second',oSecond%10);
            showDigit('.minute_first',parseInt(oMinute/10));
            showDigit('.minute_second',oMinute%10);
            showDigit('.hour_first',parseInt(oHour/10));
            showDigit('.hour_second',oHour%10);

        },1000);

    })

    $('#stop').on('click',function() {
        clearInterval(timer);
        $('#start').attr('disabled',false);

    })


    $('#reset').on('click',function() {
        clearInterval(timer);
        $('#start').attr('disabled',false);
        oHour=0;
        oMinute=0;
        oSecond=0;
        showDigit('.seconds_first',0);
        showDigit('.seconds_second',0);
        showDigit('.minute_first',0);
        showDigit('.minute_second',0);
        showDigit('.hour_first',0);
        showDigit('.hour_second',0);
    })



})


function toDigit(num) {
    if(num<10) {
        return '0'+num;
    }

    else {
        return num.toString();
    }
}

function showDigit(obj,num) {
    switch (num) {
        case 0:
            $(obj).find('.top').css('display','block');
            $(obj).find('.middle').css('display','none');
            $(obj).find('.bottom').css('display','block');
            $(obj).find('.top_left').css('display','block');
            $(obj).find('.bottom_left').css('display','block');
            $(obj).find('.top_right').css('display','block');
            $(obj).find('.bottom_right').css('display','block');
            break;
        case 1:
            $(obj).find('.top').css('display','none');
            $(obj).find('.middle').css('display','none');
            $(obj).find('.bottom').css('display','none');
            $(obj).find('.top_left').css('display','none');
            $(obj).find('.bottom_left').css('display','none');
            $(obj).find('.top_right').css('display','block');
            $(obj).find('.bottom_right').css('display','block');
            break;
        case 2:
            $(obj).find('.top').css('display','block');
            $(obj).find('.middle').css('display','block');
            $(obj).find('.bottom').css('display','block');
            $(obj).find('.top_left').css('display','none');
            $(obj).find('.bottom_left').css('display','block');
            $(obj).find('.top_right').css('display','block');
            $(obj).find('.bottom_right').css('display','none');
            break;
        case 3:
            $(obj).find('.top').css('display','block');
            $(obj).find('.middle').css('display','block');
            $(obj).find('.bottom').css('display','block');
            $(obj).find('.top_left').css('display','none');
            $(obj).find('.bottom_left').css('display','none');
            $(obj).find('.top_right').css('display','block');
            $(obj).find('.bottom_right').css('display','block');
            break;
        case 4:
            $(obj).find('.top').css('display','none');
            $(obj).find('.middle').css('display','block');
            $(obj).find('.bottom').css('display','none');
            $(obj).find('.top_left').css('display','block');
            $(obj).find('.bottom_left').css('display','none');
            $(obj).find('.top_right').css('display','block');
            $(obj).find('.bottom_right').css('display','block');
            break;
        case 5:
            $(obj).find('.top').css('display','block');
            $(obj).find('.middle').css('display','block');
            $(obj).find('.bottom').css('display','block');
            $(obj).find('.top_left').css('display','block');
            $(obj).find('.bottom_left').css('display','none');
            $(obj).find('.top_right').css('display','none');
            $(obj).find('.bottom_right').css('display','block');
            break;
        case 6:
            $(obj).find('.top').css('display','block');
            $(obj).find('.middle').css('display','block');
            $(obj).find('.bottom').css('display','block');
            $(obj).find('.top_left').css('display','block');
            $(obj).find('.bottom_left').css('display','block');
            $(obj).find('.top_right').css('display','none');
            $(obj).find('.bottom_right').css('display','block');
            break;
        case 7:
            $(obj).find('.top').css('display','block');
            $(obj).find('.middle').css('display','none');
            $(obj).find('.bottom').css('display','none');
            $(obj).find('.top_left').css('display','none');
            $(obj).find('.bottom_left').css('display','none');
            $(obj).find('.top_right').css('display','block');
            $(obj).find('.bottom_right').css('display','block');
            break;
        case 8:
            $(obj).find('.top').css('display','block');
            $(obj).find('.middle').css('display','block');
            $(obj).find('.bottom').css('display','block');
            $(obj).find('.top_left').css('display','block');
            $(obj).find('.bottom_left').css('display','block');
            $(obj).find('.top_right').css('display','block');
            $(obj).find('.bottom_right').css('display','block');
            break;
        case 9:
            $(obj).find('.top').css('display','block');
            $(obj).find('.middle').css('display','block');
            $(obj).find('.bottom').css('display','block');
            $(obj).find('.top_left').css('display','block');
            $(obj).find('.bottom_left').css('display','none');
            $(obj).find('.top_right').css('display','block');
            $(obj).find('.bottom_right').css('display','block');
            break;
    }
}


