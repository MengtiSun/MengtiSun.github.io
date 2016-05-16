/**
 * Created by AdeleSun on 3/05/2016.
 */
$(document).ready(function() {
    $('div>div').click(function() {

        var arr=['drop','dangle','jump','crawl','flip'];
        var box=this;

        var num=Math.floor(Math.random()*5);
        $(box).addClass(arr[num]);

        setTimeout(function() {
            $(box).removeClass(arr[num]);
        },4000);
    })



})