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
    myimage.src="./image/img2.jpeg";
}
//using dom you can manipulate 3 things
//innerHTML, css (style), attributes
// -------------------------------------------------
// var para=document.getElementById("para");
function display(){
    para.innerHTML="This is priya";
}
function styling(){
para.style.color="black";
para.style.backgroundColor="#ffb3ff";
para.style.border="5px solid gray";
para.style.padding="30px";
para.style.borderRadius="20px";
para.style.fontSize="30px";
para.style.textAlign="center";
para.style.fontWeight="bold";
para.style.fontFamily="'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
// para.style.backgroundColor="linear-gradient(to right, red , blue)";
para.style.textShadow = "5px 5px 1px gray";
para.style.boxShadow="10px 20px 30px gray";
}







