var myNum = 7
var num = +prompt(" Guess the secret number ")
 var message ;

if(num === myNum ){
    message =" Bingo! Correct answer."
}
else if(num === 8){
    message = "Close enough to the correct answer."
}
else if(num === 6){
    message = "Close enough to the correct answer."
}
else{
    message ="wrong "
}
alert(message)