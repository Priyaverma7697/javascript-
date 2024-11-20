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
// -----------------------------HW-----------------------------------------
// var h1=document.getElementById("demo");

//1 . Write a function to display your name in console ,alert and innerhtml of any element.
function name(){
    var name="Priya";
    console.log(name);
    h1.innerHTML=name;
    alert(name);
}
name();
// -------------------------------------------------------------------------------------
// 2 . Write a function to get the value of an input tag and display it in alert , console and innerhtml.

function display(){
    let input=(document.getElementById("input").value);
    console.log(input);
    h1.innerHTML=input;
    alert(input);
}
// ---------------------------------------------------------------------------------------
//3 . Write a function to get the values from 3 input tags and display it in innerhtml in string form (concatinate).
function display2(){
    let input3=(document.getElementById("input3").value);
    let input4=(document.getElementById("input4").value);
    let input5=(document.getElementById("input5").value);
    console.log(input3+" "+input4+" "+input5);
    h1.innerHTML=input3+" "+input4+" "+input5;
    alert(input3+" "+input4+" "+input5);

}





