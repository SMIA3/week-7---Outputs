$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    random();
  });            
});            


function random() {
    ranState = !Math.round(Math.random());
	alert(ranState);
    if ranState == true{
        navigator.notification.beep(1);
        navigator.vibrate(500)
    } else if ranState == false{
        navigator.notification.beep(2);
        navigator.vibrate([500, 200, 500])
    }
}
