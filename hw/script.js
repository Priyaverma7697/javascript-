// var h1=document.getElementById("demo");

// //1 . Write a function to display your name in console ,alert and innerhtml of any element.
// function name(){
//     var name="Priya";
//     console.log(name);
//     h1.innerHTML=name;
//     alert(name);
// }
// name();
// // -------------------------------------------------------------------------------------
// // 2 . Write a function to get the value of an input tag and display it in alert , console and innerhtml.

// function display(){
//     let input=(document.getElementById("input").value);
//     console.log(input);
//     h1.innerHTML=input;
//     alert(input);
// }
// // ---------------------------------------------------------------------------------------
// //3 . Write a function to get the values from 3 input tags and display it in innerhtml in string form (concatinate).
// function display2(){
//     let input1=(document.getElementById("input1").value);
//     let input2=(document.getElementById("input2").value);
//     let input3=(document.getElementById("input3").value);
//     console.log(input1+" "+input2+" "+input3);
//     h1.innerHTML=input1+" "+input2+" "+input3;
//     alert(input1+" "+input2+" "+input3);
// }
// ------------------------------------------------------------------------------------------------
var h1=document.getElementById("demo");
const addition=()=>{
    let num1=parseFloat(document.getElementById("input1").value);
    let num2=parseFloat(document.getElementById("input2").value);
    var result=num1+num2;
    h1.innerHTML=result;
}
const subtraction=()=>{
    let num1=parseFloat(document.getElementById("input1").value);
    let num2=parseFloat(document.getElementById("input2").value);
    var result=num1-num2;
    h1.innerHTML=result;
}
const multiplecation=()=>{
    let num1=parseFloat(document.getElementById("input1").value);
    let num2=parseFloat(document.getElementById("input2").value);
    var result=num1*num2;
    h1.innerHTML=result;
}
const division=()=>{
let num1=parseFloat(document.getElementById("input1").value);
let num2=parseFloat(document.getElementById("input2").value);
var result= num1/num2;
h1.innerHTML=result;
}
// let h1=document.querySelectorAll("h1")
// console.log(h1);

// h1[0].innerHTML="Hello i'm from JS class";
// h1[0].style.color="red";

// h1[1].innerHTML="Hello i'm from C++ class";
// h1[1].style.color="green";

function display(){
    alert("function called");
}
const display1=function(){
alert ("2nd function called")
}
const display2=()=>{
    alert("3rd function called by arraow function")
}

let button=document.getElementById("btn");
button.addEventListener("click", display);
button.addEventListener("mouseover", display1);
























































