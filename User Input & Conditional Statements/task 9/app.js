var science = +prompt("Enter your Science marks")
var maths = +prompt("Enter your Maths marks")
var english = +prompt("Enter your English marks")
var totalMarks = 300
var obtainedMarks=science +maths +english 
var percentage = obtainedMarks/totalMarks*100
var message;
if(percentage >= 80){
    message = "grade : A-one" + "</br>" + "Remarks : Excellent" 
}
if(percentage >= 70){
    message = "grade : A" + "</br>" + " Remarks : Good" 
}
if(percentage >= 60){
    message = "grade : B" + "</br>" + "Remarks : You need to improve" 
}
if(percentage < 60){
    message = "grade : Fail" + "</br>" + "Remarks Sorry" 
}

document.write("<h1>Marks Sheet</h1>" + "</br>" + "</br>" + "Total marks :" + totalMarks + "</br>" + "Marks obtained : " + obtainedMarks +
    "</br>" + "Percentage : " + percentage + "%" + "<br/>" +  message
)     