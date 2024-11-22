//regular function
function display(){
    alert("function called");
}
//function expression
const display1=function (){
    alert("function expression called");
}
//arrow function
const display2 =()=>{
    alert("arrow function called");
}
// -----------------------------------------------------------
//whenever you pass a function as an arguement to another function
//never use ()

// you can call regular function before declaration but not 
//arro function and function expression

//quety selector
let h1=document.querySelectorAll("h1");
console.log(h1);

h1[0].innerHTML="hello from query selector";
h1[0].style.color="red";

h1[1].innerHTML="hello from query selector";
h1[1].style.color="green";

let button=document.getElementById("btn");
button.addEventListener("click", display2);
button.addEventListener("mouseover", function(){
    // document.write("Hello from mouseover event");
    // alert("Hello from mouseover event");
    // console.log("Hello from mouseover event");
});
// {
//     alert("directly function called");
// }






























