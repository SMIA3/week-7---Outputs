$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    random();
  });            
});            


function random() {
    ranState = !Math.round(Math.random());
    if (ranState){
        navigator.notification.beep(1);
        navigator.vibrate(500);
        alert(ranState) //console.log(ranState);
    } else {
        navigator.notification.beep(2);
        navigator.vibrate([500, 200, 500]);
        alert(ranState) //console.log(ranState);
    }
}
