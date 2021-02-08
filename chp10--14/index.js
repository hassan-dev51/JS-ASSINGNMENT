
alert("Simple Calculator");
var num1=Number( prompt("First Number","7"));
var operator=( prompt("Select operator +,-,*,/"));
var num2=Number(prompt("Second Number","3"))
if (operator =="+") {
    alert(num1 + "+" + num2 + "="+ " " +parseInt( num1+num2));
}
else if(operator=="-"){
    alert(num1 + "-" + num2 + "="+ " " +parseInt(num1-num2));
}
 else if(operator=="*"){
    alert(num1 + "*" + num2 + "="+ " " + num1*num2);
}
else if(operator=="/"){
    alert(num1 + "/" + num2 + "="+ " " +num1/num2);
}
else{
    alert("Invalid input..!");
}

