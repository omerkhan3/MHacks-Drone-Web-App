// App Javascript File

$(document).ready(){

  var geodata = "here";
  var alertsRef = firebase.database().child("alerts");
  console.log("Hello!");
  $(".emergency").on('click', function(){
    alertsRef.child().set({
      location: geodata;
    })
  });

});
-
