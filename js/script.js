//Business logic
    var randomNum = Math.floor((Math.random()*6)+1);
    var displaytotalPoints = 0;

//userinterface logic
$(document).ready(function(){

  $("#p1-roll").click(function(event) {
    if(randomNum>1){
      displaytotalPoints += randomNum;

        if(displaytotalPoints>=100){
          alert(displaytotalPoints+" :Congratulations ! You are our newest winner!");

          displaytotalPoints = 0; $().append(displaytotalPoints);
          $('').text('');
        }
        $('#score1').text(displaytotalPoints);
      }
      else{
          displaytotalPoints = 0;
          $("#score1").text(displaytotalPoints);
          alert("Sorry, rolling a 1 has messed your chance. Next player please");
      }
    });
    $("#p1-hold").click(function() {
    var hold = $("#Totalscore1").text() * 1;
    $("#score1").text(0);
    $("#player1").hide();
    $("#player2").show();
    });

$("#p2-roll").click(function(event) {
    if(randomNum>1){
      displaytotalPoints += randomNum;

        if(displaytotalPoints>=100){
          alert(displaytotalPoints+" :Congratulations ! You are our newest winner!");

          displaytotalPoints = 0; $().append(displaytotalPoints);
          $('').text('');

        }

      $('#score2').text(displaytotalPoints);
    }
    else{
        displaytotalPoints = 0;
        $("#score2").text(displaytotalPoints);
        alert("Sorry, rolling a 1 has messed your chance. Next player please");
    }

});

$("#p2-hold").click(function() {
var hold = $("#Totalscore2").text() * 1;
$("#score2").text(0);
$("#player1").hide();
$("#player2").show();
});

$("button#game").click(function(){
    $(".rules").toggle();
});
});
