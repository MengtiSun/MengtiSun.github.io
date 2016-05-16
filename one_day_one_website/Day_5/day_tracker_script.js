/**
 * Created by AdeleSun on 19/04/2016.
 */

window.onload=function() {
    var oWeek=document.getElementById('week');
    var aWeek=oWeek.getElementsByTagName('div');
    var oDay=document.getElementById('day');
    var oDay0=oDay.getElementsByTagName('p')[0];
    var oToday=document.getElementById('today').getElementsByTagName('p')[0];

    var arr=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var arr0=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    var oDate=new Date();
    var oTodayDate=oDate.getDay();

    console.log(oDay0);
    oDay.style.left=oWeek.offsetLeft+oTodayDate*100+'px';
    oDay0.innerHTML=arr[oTodayDate];
    oToday.innerHTML="Oh. It's "+arr0[oTodayDate]+".";
    console.log(oDay0);

}




