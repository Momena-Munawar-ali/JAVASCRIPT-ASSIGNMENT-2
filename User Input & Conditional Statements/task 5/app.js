var color = prompt("Enter signal color")
var message ;
if( color === "red" ){
    message = " Vehicles must stop";
}
if( color === "yellow" ){
    message = " Vehicles should get ready to move";
}
if( color === "green" ){
    message = " Vehicles can move now";
}
alert(message)