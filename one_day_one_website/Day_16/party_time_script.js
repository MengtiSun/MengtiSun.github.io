/**
 * Created by AdeleSun on 4/05/2016.
 */
$(document).ready(function() {
    $('form').on('submit',function(ev) {
        var oEvent=ev||event;
        oEvent.preventDefault();
        var oDate=new Date();
        var oDay=oDate.getDay()+1;
        var oMonth=oDate.getMonth()+1;
        var oYear=oDate.getFullYear();

        var arr=$('#birth').val().split('-');
        var oBDate=parseInt(arr[2]);
        var oBMonth=parseInt(arr[1]);
        var oBYear=parseInt(arr[0]);


        if($('#birth').val()=='') {
            $('h1').text('No Birthday? No Parties for You!');
        }
        else if(oDay==oBDate&&oMonth==oBMonth&&oYear==oBYear) {
            $('h1').text("Today's your birthday?! PARTY TIME!");
        }
        else {
            $('h1').text("Boo! No Parties Today.");
        }
        var months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
        var weeks=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        $(".birth_info").css("display", "block");

        $('#birthday').html('Your birthday is '+months[oBMonth-1]+' '+arr[2]);
        $('#birth_year').html("You're "+(oYear-oBYear)+" years old");
        var oneDay=24*60*60*1000;
        var oneMin=1000*60;
        var oTime=new Date().getTime();
        var oBTime=new Date(arr[0],(arr[1]-1),arr[2]).getTime();
        var numDay=Math.floor((oTime-oBTime)/oneDay);
        $('#birth_day').html("You're "+numDay+" days old");

        var oHour=oDate.getHours();
        var oMinute=oDate.getMinutes();
        if($('#time').val()==''){
            var oBMinute=[0,0];
        }
        else {
            var oBMinute=$('#time').val().split(':');
        }

        var numMin=Math.floor((oTime-oBTime)/oneMin-oBMinute[0]*60-oBMinute[1]);
        $('#birth_minute').html("You're "+numMin+" minutes old");

        var future1=oBTime+10000*24*60*60*1000;
        var futureDay=new Date(future1);
        var futureDayDate=futureDay.getDate();
        var futureDayMonth=futureDay.getMonth();
        var futureDayDay=futureDay.getDay();
        var futureDayYear=futureDay.getFullYear();


        $('#next_birth').html("Your 10,000th day is "+weeks[futureDayDay]+" "+months[futureDayMonth]+" "+futureDayDate+" "+futureDayYear);


    })
})