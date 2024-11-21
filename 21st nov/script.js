var firstName="Harry";
var lastName="Potter";
console.log(firstName+ " "+lastName);

let para=document.getElementById("para");
console.log(para);

function display(){
    para.innerHTML="This is coming from JavaScript";
}
function styling(){
    para.style.color="red";
    para.style.backgroundColor="yellow";
    para.style.border="4px solid black";
    para.style.borderRadius="4px";
    para.style.padding="20px";
    para.style.fontSize="30px";
    para.style.textShadow="5px 5px 1px gray";
}
var myinput=document.getElementById("myinput");
var myimage=document.getElementById("myimage");
console.log(myinput);
function change(){
    myinput.value="Indore";
    myimage.src="img2.jpeg";
}





//using dom you can manipulate 3 things
//innerHTML, css (style), attributes








