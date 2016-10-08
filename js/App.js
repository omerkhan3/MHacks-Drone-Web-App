// App Javascript File

$(document).ready(){

  var geodata = "here";
  var alertsRef = firebase.database().child("alerts");
  $(".emergency").on('click', function(){
    alertsRef.child().set({
      location: geodata;
    })
  });

});
-
