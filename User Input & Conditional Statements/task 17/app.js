var firstNumber = +prompt("Enter First Number ");
var SecondNumber = +prompt("Enter Second Number ");
var operation = prompt("Enter operation");

if(operation == "+" ){
    alert(firstNumber+SecondNumber)
}

else if(operation == "-" ){
    alert(firstNumber-SecondNumber)
}

else if(operation == "*" ){
    alert(firstNumber*SecondNumber)
}
else if(operation == "/" ){
    alert(firstNumber/SecondNumber)
}
else if(operation == "%" ){
    alert(firstNumber%SecondNumber)
}
else{
    alert("Enter any input")
}

