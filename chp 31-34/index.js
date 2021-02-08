alert("Chp 31-35");

var Name=prompt("Enter Your Name!","Name");
var days=Number(prompt("Enter Your DOB","12"));
var month=Number(prompt("Enter Your Month","5"));
var year=Number(prompt("Enter Your Year","5"));
// var together=new Date(year-month-days)
// console.log(together);

var d=new Date();
//year
var setYear=new Date(year)
var currentYear=d.getFullYear();
var selectYear=setYear.getTime();
var dif=currentYear-selectYear;
var perYear=dif*365;


//month
// var setMonth=d.setMonth(11);
var currentMonth=12;
var selectMonth=month;
var difference=currentMonth-selectMonth;
//days
// var setDays=new Date();
var currentDate=31;
var selectDate=days;
var differenc=currentDate-selectDate;
//mints
var currentHour=d.getHours();
var currentMints=d.getMinutes();
var currentSecond=d.getSeconds();
if (currentHour<12) 
{
    console.log(`"Hello ${Name} Good Morning"`);
} 
else if(currentHour<16) 
{
    console.log(`"Hello ${Name} Good Afternoon"`);
}
else if(currentHour<20) 
{
    console.log(`" Hello ${Name} Good Evening"`);
}
else if(currentHour<23) 
{
    console.log(`"Hello ${Name} Good Night"`);
}
else if(currentHour==23) 
{
    console.log(`"Hello ${Name} Good Night"`);
}

var otherday=new Date()
otherday.setDate(days)
otherday.setMonth(month-1)
otherday.setFullYear(year)
console.log(`Your DOB is ${otherday}`);
console.log(`Your are ${dif} Years ${difference} Month  ${differenc} Days ${currentHour}Hours ${currentMints} Mints ${currentSecond} Seconds old`);
console.log(`Your age is ${perYear} Days`);
var nextbirthday=dif/365
console.log(`How many time left in next birthday: ${nextbirthday} Days`);