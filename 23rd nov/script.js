// function clickme(){
//     alert("button was clicked");
// };
// function hover(){
//     alert("Button was hover");
// }
// let button=document.getElementById("btn");
// button=addEventListener("mouseover", hover);
// button=document.getElementById("click", hover);
function validate(){
// alert("sucess");
let myname=document.getElementById("name").value;
let myemail=document.getElementById("email").value;
let password=document.getElementById("psw").value;
let ConfirmPassword=document.getElementById("cnfpw").value;

console.log(myname, myemail, password, ConfirmPassword);
if(myname=="" || myemail==""||password==""|| ConfirmPassword==""){
    alert("All fields are required");
    return false;
}
}
//read object


