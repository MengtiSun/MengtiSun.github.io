/**
 * Created by AdeleSun on 6/05/2016.
 */
$(document).ready(function() {
    var i=["Home","Projects","Professions","Education","Contact Me"];
    var e=window.location.href.indexOf("cn.html")>=0;

    $('#pagepiling').pagepiling({
        menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
        anchors: [],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: true,
        loopTop: true,
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'left',
            'tooltips': ['Cover Page', 'Objective', 'Education', 'Professions', 'Projects','Contact Me']
        },
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,


        onLeave:function(i,e){
            for(var a=$(".section"),t=0;t<a.length;++t)
                t+1==i?$(a[t]).addClass("leaving"):$(a[t]).removeClass("leaving")}});
        $(".initing").removeClass("initing");
    });




