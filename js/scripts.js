//Business logic
/*var player1="";
var player2="";

var die1= function() {
 return Math.floor(Math.random() *6) +1;
};

if(start1 === 1 || start2 == 1) { 
    return 0;
    }else {return score}
 
var Game = {
    player1Score: 0,
    player2Score: 0,
    result: 0,
    };
    var pRoll = function() {
        var roll = dieRoll();
        if(roll ===1){
          Game.result = 0;
          alertEndTurn();
          switchPlayer();
        } else {
          Game.result +=roll;  
          return roll;*/

//userinterface logic
/*$(document).ready(function(){
    $("#p1-roll").click(function(){
        return Math.floor(Math.random() *6) +1;
    })
});*/

$("button").click(function(){
    $(".rules").toggle();
});

