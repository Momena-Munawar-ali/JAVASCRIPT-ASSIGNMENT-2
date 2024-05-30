var gender = prompt("Enter your gender")
var message = "not match";
if(gender === "male"){
 message = "Good Morning Sir";
}
if(gender === "female"){
    message = "Good Morning Ma'am";
}
alert(message)