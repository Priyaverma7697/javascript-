var h1=document.getElementById("demo");

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
    let input1=(document.getElementById("input1").value);
    let input2=(document.getElementById("input2").value);
    let input3=(document.getElementById("input3").value);
    console.log(input1+" "+input2+" "+input3);
    h1.innerHTML=input1+" "+input2+" "+input3;
    alert(input1+" "+input2+" "+input3);

}





