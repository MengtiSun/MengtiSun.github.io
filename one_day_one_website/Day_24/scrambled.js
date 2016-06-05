/**
 * Created by AdeleSun on 16/05/2016.
 */
$(document).ready(function() {
    $('.btn').on('click',function() {
        $('.main').css('display','none');
        $('.game').css('display','block');
    })


    var count=0;
    var score=0;
    $('.submit').on('click',function() {
        var val=$('.guess').val();
        var val_correct=$('.word').html();

        if(val==val_correct) {

        }
        else if(count==0){
            $('.info').html('Incorrect! 2 chances left');
            count++;
            console.log(count);
        }
        else if(count==1) {
            $('.info').html('Incorrect! 1 chances left');
            count++;
        }
        else if(count==2) {
            $('.info').html('Incorrect! You are out of chances');
            $('.answer').html('The word was FLOWER');
            $('.submit').attr('disabled','disabled');
            score--;
            $('.score').html('Score: '+score);
            count=0;
            setTimeout(function() {
                $('.info').html("Here's your next word.");
                $('.answer').html('');
                $('.submit').removeAttr('disabled');
            },1000);
        }
    })


    //var array;
    //
    //$.ajax({
    //    type: 'GET',
    //    url: 'words.html',
    //    async: false,
    //    success: function (data) {
    //        array = data.split("\n");
    //    }
    //});
    //
    //alert(array);
})