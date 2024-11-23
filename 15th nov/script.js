var h1=document.getElementById("demo");
h1.innerHTML="Do you work everyday";
var name= "John Doe";
var age= 34;
console.log(name, age);
concatination 
console.log(name + " "+age);
h1.innerHTML=name+ " " + age;
// --------------------------------------------------
// to get value from user
var username=prompt("Enter your name");
var userage=prompt("Enter your age");
h1.innerHTML=username+ " " +userage;

//get color name and background color
//from user and apply on heading

var txtcolor=prompt("Enter color");
var bgcolor=prompt("Enter background color");

h1.style.color=txtcolor;
h1.style.backgroundColor=bgcolor;
// // ------------------------------------------------------
// //change attribute
// 





// take a name from user and display
// in innerHTML of h1 element and change its style
// prompt user name lena hai h1 value innerhtml
//design by java script
var h1=document.getElementById("demo");

var username=prompt("Enter your name");
var userage=prompt("Enter your age");
h1.innerHTML=username+ " "+userage;

var txtcolor=prompt("Enter your color");
var bgcolor=prompt("Enter your background color");
var border=prompt("Enter border color");
var redius=prompt("Enter border Radius");
var shadow=prompt("Enter text shadow");     
var fontSize=prompt("Enter font size");
var height=prompt("Enter height");
var textAlign=prompt("Enter your text align");

h1.style.color=txtcolor;
h1.style.backgroundColor=bgcolor;
h1.style.border=border;
h1.style.borderRadius=redius;
h1.style.textShadow=shadow;
h1.style.fontSize=fontSize;
h1.style.textAlign=textAlign;

