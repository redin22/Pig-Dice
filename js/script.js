//Business logic
/*function Roll() {
    this.result = 0;
  }

Roll.prototype.roll = function() {
   var diceRoll = Math.floor(Math.random() * 6) + 1;
   $('.output1').text(diceRoll) && ('.output2').text(diceRoll) ;
   return diceRoll;
    }

Roll.prototype.hold = function() {
   var roll = this.roll();
   if (roll == 1) {
    this.result = 0;
  } else {
    this.result += roll;
  }
  return this.result;
 };

//userinterface logic
$(document).ready(function(){
    $("#p1-roll").click(function(){
      return Math.floor(Math.random() * 6) + 1;
    });
});

var newroll = new Roll();
  $("#p1-roll").click(function(event) {
  event.preventDefault();

});

    var hold = $("#Totalscore1").text() * 1;

    $("#Totalscore1"*/
  var displaytotalPoints = 0;

  $("#p1-roll").click(function(event) {
    var randomNum = Math.floor((Math.random()*6)+1);

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
    $("#Totalscore1").text(displaytotalPoints);
    $("#score1").text(0);
    $("#player1").hide();
    $("#player2").show();
    });

$("#p2-roll").click(function(event) {
  var randomNum = Math.floor((Math.random()*6)+1);

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
$("#Totalscore2").text(displaytotalPoints);
$("#score2").text(0);
$("#player1").hide();
$("#player2").show();
});

$("button#game").click(function(){
    $(".rules").toggle();
});
