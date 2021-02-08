
var decimalinput=prompt("Enter the decimal Number","1.23..");
var greaterNo= Math.ceil(decimalinput);
alert(greaterNo);

var text="This is dummy text";
var slicetext=text.slice(0,4);
alert(slicetext);
alert("After reverse the text")
var s=slicetext.toString();
var sp=s.split('')
console.log(sp);
var b =sp.reverse();
alert(b);
for (let i = 0; i < b.length; i++) {
   console.log(b);
}