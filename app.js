var city = prompt ("Enter city name")
if (city == "karachi"){
    alert ("Welcome to city of lights")
}
var gender = prompt ("Your gender?")
if (gender === "male"){
    alert ("Good Morning sir")
}
else if (gender === "female"){
    alert ("Good Morning Mam")
}
var signal = prompt ("Please enter traffic signal colour")
if (signal === "Red"){
    alert ("Must stop")
}
else if (signal === "Yellow"){
    alert ("Ready to move")
}
else if (signal === "Green"){
    alert ("Move Now")
}
var fuel = prompt ("Enter remaining fuel")
if (fuel < "0.25"){
    alert ("Please refill the fuel in your car")
}
//answer 6
var userName = prompt ("what is your obained marks")
document.write ("obained mark" + " "+ userName + "<br>")
var totalMarks = 300;
document.write ("totalMarks" +" "+totalMarks+ "<br>")
var percentage = userName / totalMarks * 100
document.write ("percentage" +percentage + "<br>")
if (percentage>=90){
    document.write("GRADE"+ " "+ "A"+ " "+ "<br>")
}
else if (percentage >= 80){
    document.write("GRADE"+ " "+ "B"+  " "+ "<br>")
}
else if (percentage >= 70){
    document.write("GRADE"+ " "+"C"+  " "+ "<br>")
}
else if (percentage >= 60){
    document.write("GRADE"+ " " + "D" +  " "+ "<br>")}
else {
    document.write("GRADE"+ " " +"FAIL"+  " "+ "<br>")
}