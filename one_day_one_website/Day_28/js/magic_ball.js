/**
 * Created by AdeleSun on 31/05/2016.
 */
$(document).ready(function() {
    var answers = ["Signs point to yes", "Yes", "Reply hazy, try again",
        "Without a doubt", "My sources say no", "As I see it, yes",
        "You may rely on it", "Concentrate and ask again",
        "Outlook not so good", "It is decidedly so",
        "Better not tell you now", "Very doubtful", "Yes - definitely",
        "It is certain", "Cannot predict now", "Most likely",
        "Ask again later", "My reply is no", "Outlook good",
        "Don't count on it"];


    $('.btn1').one('click',function() {
        $('.content').fadeOut('100');
    })

    $('.btn1').on('click',function(ev) {
        ev.preventDefault();
        $('.answer').fadeIn('400');
        $('.answer_outer').fadeOut('100');
        $('.answer_content').fadeOut('100');
        setTimeout(function() {
            $('.answer_outer').fadeIn('400');
            $('.answer_content').fadeIn('400');
            if($('.text1').val()=='') {
                $('.answer_content').html('Hey! I\'m not a mind reader!');
            }
            else {
                $('.answer_content').html(answers[randomNum(answers.length)]);
            }
        },1000);

    })



    function randomNum(num) {
        return Math.floor(Math.random()*num);
    }

})