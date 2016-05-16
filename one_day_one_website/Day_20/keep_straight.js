/**
 * Created by AdeleSun on 11/05/2016.
 */
$(document).ready(function() {
    $('.block1').on('mouseenter',function() {
        var status=0;
        var fail=["That's lame.",
            "Ouch, too bad.",
            "I am sure you're good at something.",
            "That wasn't too pretty.",
            "Well, at least you tried.",
            "Maybe cursors just aren't your thing.",
            "I've seen worse failures.",
            "Well that sucked.",
            "Are you using your foot?"];

        $('.block3').on('mouseenter',function() {
            $('.game').html("<h2>Excellent work!</h2><h3>Now that you've got the hang of it, let's take it up a notch.</h3>");
            $('.game').css('width','100%');
            $('.next').css('display','block');
            $('.game6').css('cursor','auto');
            status=1;


        })

        $('.game_harder').on('mouseenter',function() {
            $('.game').html("<h2>Awesome!</h2><h3>Let's try something a bit more challenging now.</h3>");
            $('.game').css('width','100%');
            $('.next').css('display','block');
            status=1;
        })

        $('.game_harder1').on('mouseenter',function() {
            $('.game').html("<h2>Damn You're Good!</h2><h3>What if we remove the guide?</h3>");
            $('.game').css('width','100%');
            $('.next').css('display','block');
            status=1;
        })

        $('.game_hardest').on('mouseenter',function() {
            $('.game').html("<h2>You are a genius!</h2><h3>Congratulations! You have finished all levels! Wanna play again?</h3>");
            $('.game').css('width','100%');
            $('.next').css('display','block');
            $('.next').css('paddingLeft','150px');
            status=1;
        })

        $('.block').on('mouseleave',function() {
            if(status==0) {
                var num=Math.floor(Math.random()*8);
                $('.game').html('<h2>FAIL!</h2>'+fail[num]);
                $('.game').css('width','100%');
                $('.same').css('display','block');
            }
        })



    })



})