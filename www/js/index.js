$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    random();
  });            
});            


function random() {
    ranState = !Math.round(Math.random());
    if (ranState){
        alert(ranState);
        navigator.notification.beep(1);
        navigator.vibrate(500);
    } else {
        navigator.notification.beep(2);
        alert(ranState);
        navigator.vibrate([500, 200, 500]);
    }
}
