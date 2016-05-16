/**
 * Created by AdeleSun on 5/05/2016.
 */
$(document).ready(function() {
    //drag();
    //$('.block').draggable({
    //    containment: 'window',
    //    stack: '.block',
    //    snap: true,
    //    snapMode: 'outer',
    //    snapTolerance: 13,
    //});
    //for(var i=0;i<13;i++) {
    //    var shapes = ['triangle_left', 'triangle_right', 'triangle',
    //        'square', 'rectangular_1', 'rectangular_2', 'rectangular_3',
    //        'circle', 'semicircle', 'quacircle_1',
    //        'para_1', 'quacircle_2', 'para_2'];
    //    $('.blocks').append('<div class="block0 '+shapes[i]+'"></div>');
    //    $('.block0').draggable({
    //        containment: 'window',
    //        stack: '.block',
    //        snap: true,
    //        snapMode: 'outer',
    //        snapTolerance: 13,
    //    });
    //}

    $('.titles').on('mouseover',function() {
        $(this).addClass('disappear');
    })

    $('.block').on('mousemove',function() {
        drag($(this));
    })

    function drag(obj) {
        var newClass=$(obj).attr('class').substring(6);
        $('.blocks').append('<div class="block0 '+newClass+'"></div>');
        $('.block0').draggable({
            containment: 'window',
            //stack: '.block',
            snap: true,
            snapMode: 'outer',
            snapTolerance: 13,
        });
        //alert('a')

    }


})