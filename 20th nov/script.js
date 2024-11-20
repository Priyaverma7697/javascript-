// function display() {
//     console.log("Hello world")
// }
// // -----------------------------------------------------
// var h1=document.getElementById("demo")
// function (){
//     var name="Priya";
//     var course= "FSD";
//     h1.innerHTML=name+" "+course;
// }

var h1=document.getElementById("demo");
function addition(){
    let num1= parseInt(document.getElementById("input1").value);
    let num2= parseInt(document.getElementById("input2").value);
    var result= num1+num2;
    h1.innerHTML=result;
}
function subtraction(){
    let num1= parseInt(document.getElementById("input1").value);
    let num2= parseInt(document.getElementById("input2").value);
    var result= num1-num2;
    h1.innerHTML=result;  
}
function multiplecation(){
    let num1= parseInt(document.getElementById("input1").value);
    let num2= parseInt(document.getElementById("input2").value);
    var result= num1*num2;
    h1.innerHTML=result;
}
function devide(){
    let num1= parseFloat(document.getElementById("input1").value);
    let num2= parseFloat(document.getElementById("input2").value);
    var result= num1/num2;
    h1.innerHTML=result;
}
function display(){
    let myinput=(document.getElementById("myinput").value);
    h1.innerHTML=myinput;
    console.log(myinput);
    alert(myinput);
    }

