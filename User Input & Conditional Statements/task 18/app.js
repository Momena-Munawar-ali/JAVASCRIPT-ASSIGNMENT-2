var dayName = prompt("what's the day today???");

if(dayName === "monday" || dayName === "tuesday" || dayName === "wednesday" || dayName === "thursday" || dayName === "friday"  ){
    alert("It's a week day")
}
else if(dayName === "saturday"){
    alert("It's weekend")
}
else if(dayName === "sunday"){
    alert("Yay! It's a holiday")
}