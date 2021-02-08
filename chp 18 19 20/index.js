
var courses=[]
for (var i = 0; i <5; i++) {
    
    course1= prompt("course"+ (i+1),"Enter course here"); 
    courses.push(course1)
}
alert(courses);
for (var i = 0; i <5; i++) 
{
     course1=prompt("course"+(i+1),courses[i])
     courses.splice(i,1,course1)
}
alert("Updated Course"+courses)
// let a =["Prompt","alert","array"]
// //shift use to remove an element from an array
// //unshift use to add one or more element in the beginning of the array
// a.unshift("java","python")
// console.log(a);