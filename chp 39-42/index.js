console.log("chp 39-42");

var course1= Number(prompt("Enter First Course Number","Subject"))
var course2= Number(prompt("Enter Second Course Number","Subject"))
var course3= Number(prompt("Enter Third Course Number","Subject"))
var course4= Number(prompt("Enter Forth Course Number","Subject"))
var course5= Number(prompt("Enter Fifth Course Number","Subject"))

var totalmarks=500;
var sum=course1+course2+course3+course4+course5
alert("You Got "+" "+sum + " Marks");
var percentage=sum/totalmarks*100;
var limit=percentage.toFixed(2);
alert("You got " + " " + limit+"%");
switch (true) {
    case limit>=90:
        console.log("You achieved A+ Grade");
        break;
        case limit>=90:
            alert("You achieved A+ Grade");
            break;
         case limit>=75:
        alert("You achieved A Grade");
        break;
        case limit>=60:
        alert("You achieved B Grade");
        break;
        case limit>=45:
        alert("You achieved C Grade");
        break;
        case limit>=30:
        alert("You achieved D Grade");
        break;
        case limit>=0:
        alert("You are fail F Grade");
        break;
    default:
        alert("Error");
        break;
}