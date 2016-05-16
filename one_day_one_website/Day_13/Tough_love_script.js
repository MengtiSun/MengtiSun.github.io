/**
 * Created by AdeleSun on 29/04/2016.
 */
$(document).ready(function () {
    var suggestion=["That's terrible! You should knock that off!",
        "Seriously? Why don't you grow the hell up?!",
        "Aren't you a little old for that crap?",
        "You are bad and you should feel bad!",
        "Gross. You are gross.",
        "Are you going to suck all your life?",
        "What? Who does that?!",
        "I thought you were better than that.",
        "My disapproval is overwhelming.",
        " ಠ__ಠ ",
        "Are you freaking kidding me?",
        "NO! Bad!",
        "And when do you plan on becoming an adult?",
        "That is totally unacceptable.",
        "You should be utterly ashamed.",
        "Ugh! That's horrible!",
        "A kitten dies everytime you do that.",
        "I can't believe you are that disgusting."];

    $('#habbit').focus(function() {
        $(this).css('borderColor', 'pink')
    });

    $('#text').blur(function() {
        $(this).css('borderColor', 'rgba(0,0,0,0.3)')
    });

    $('form').submit(function() {
        var num=Math.floor(19*Math.random());
        console.log(num);
        event.preventDefault();
        var bad_habbit=$('#habbit').val();
        if(bad_habbit=='') {
            $('#habbit_repeater').html("You don't fill in forms?");
            $('#advice').html(suggestion[num]);
        }
        else {
            $('#habbit_repeater').html("You "+bad_habbit+'?');
            $('#advice').html(suggestion[num]);
        }
        $('#habbit').val('');
    })

})