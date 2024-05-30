var name1Team = prompt("Enter Team A name");
var name2Team = prompt("Enter Team b name");
var score1 = prompt("Enter Team A score");
var score2 = prompt("Enter Team B score");
if(score1 > score2){
    alert( name1Team+ " is winner")
}
else if(score2 > score1){
    alert( name2Team+ " is winner")
}
else{
    alert("Game is tie")
}