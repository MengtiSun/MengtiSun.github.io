/**
 * Created by AdeleSun on 9/05/2016.
 */
$(document).ready(function() {

    var arr=['size1','size2','size3','size4','size5','size6'];

    $(document).on('click',function(ev) {
        var oEvent=ev||event;
        var oDiv=$('<div>');

        var size=arr[randomNum(5)];
        var color=randomColor();
        $(oDiv).addClass(size);
        $(oDiv).addClass('newDiv grow');
        $(oDiv).css('left',oEvent.clientX);
        $(oDiv).css('top',oEvent.clientY);
        $(oDiv).css('backgroundColor',color);
        $('#wrapper').append(oDiv);

        var n=randomNum(5);
        if(n%2==0) {
            var oDiv1=$('<div>');
            $(oDiv1).addClass(size);
            $(oDiv1).addClass('newDiv');
            $(oDiv1).css('left',oEvent.clientX);
            $(oDiv1).css('top',oEvent.clientY);
            $(oDiv1).css('backgroundColor',color);
            $('#wrapper').append(oDiv1);
        }

        else if(n==0) {
            setTimeout(function() {
                $(oDiv).css('backgroundColor',randomColor());
            },2000);
        }

        else if(n==1) {
            setTimeout(function() {
                $(oDiv).css('display','none');
            },6000)
        }


    })




    function randomColor() {
        var color1=randomNum(255);
        var color2=randomNum(255);
        var color3=randomNum(255);

        return 'rgb('+color1+','+color2+','+color3+')';
    }

    function randomNum(num) {
        return Math.floor(Math.random()*(num+1));
    }


})