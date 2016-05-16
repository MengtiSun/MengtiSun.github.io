/**
 * Created by AdeleSun on 20/04/2016.
 */
window.onload=function() {
    var aSuchi=document.getElementById('sushi').getElementsByTagName('img');
    var arr=['shake','hop','spin','grow','hooray'];

    for(var i=0;i<aSuchi.length;i++) {
        aSuchi[i].onclick=function() {
            //var newClass=arr[0];
            var newClass=arr[Math.round(Math.random()*4)];
            this.className='sushi_box '+newClass;
            //setTimeout(function() {
            //    this.className='sushi_box';
            //    console.log(this.className);
            //},2100);

            this.onmousedown=function() {
                this.className='sushi_box';
            }
        }
    }
}







