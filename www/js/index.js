//document.addEventListener("deviceready", onDeviceReady, false);
//function onDeviceReady() {
//    console.log(navigator.notification);
//}

$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    random();
  });            
});


function random() {
    console.log("button Clicked")
    ranState = !Math.round(Math.random());
    if (ranState){
        console.log("True Clicked")
        navigator.notification.beep(1);
        navigator.vibrate(500);
        alert(ranState) //console.log(ranState);
    } else {
        console.log("False Clicked")
        navigator.notification.beep(2);
        navigator.vibrate([500, 200, 500]);
        alert(ranState) //console.log(ranState);
    }
}
