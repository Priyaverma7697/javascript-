//4 way to display output from javascript
console.log("hello world");
window.alert("hello");
document.write("hello javascript");

document.getElementById("demo").innerHTML= "Hello World";
// var , let , const
var global1= "John";
let global2 ="dow";
const global3= "harry";

//var has globlal scope and let and const has block or function scope
{
    var a= 10;
    let b=20;
    const c=30;
    console.log(b);
}
console.log(a);
console.log(c);
