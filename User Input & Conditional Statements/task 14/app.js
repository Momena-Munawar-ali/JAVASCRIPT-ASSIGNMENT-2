var input = prompt("Enter something....")
if( input >= 0){
    alert(input + " is a number")
}
else if( input < 0){
    alert( input + " is a number")
}
else if( input=="true" || input=="false" ){
    alert(input + " is a boolean")
}
else{
    alert(input + " is a string")
}