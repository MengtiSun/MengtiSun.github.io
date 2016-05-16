/**
 * Created by AdeleSun on 15/05/2016.
 */
$('document').ready(function() {

    $('.link1').on('mouseenter',function() {
        $(this).removeClass('changeColor2');
        $(this).addClass('changeColor1');
    })

    $('.link1').on('mouseleave',function() {
        $(this).removeClass('changeColor1');
        $(this).addClass('changeColor2');
    })

    $('.links').on('mouseenter',function() {
        $(this).removeClass('changeColor4');
        $(this).addClass('changeColor3');
    })

    $('.links').on('mouseleave',function() {
        $(this).removeClass('changeColor3');
        $(this).addClass('changeColor4');
    })


    //$('.tags').on('mouseenter',function() {
    //    this.className='changeColor4';
    //})
    //
    //$('.tags').on('mouseleave',function() {
    //    this.className='changeColor3';
    //})


})