
//object literal

const person = {
    name : "John",
    age : 30,
    city : "Bhopal"
};
//to know the data type use (typeof)
console.log(person);
console.log(typeof person);
console.log(person.name);
console.log(person.age);
console.log(person.city);

//Array
const numbers=[10,20,30,89];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

//Function is a way to group code together, you can run it anytime anyware;
// function declaration 
function sayHello(){
    //code be executed
    console.log("Hello everyone!");
    // alert("Hello")
}
sayHello();
//parameters when you declear a function
function addition(num1, num2) {
    return num1+num2;
}
//arguments while calling the number
addition(20,30);
console.log(addition(20,30));
console.log(addition (100,500))

document.getElementById("demo").innerHTML=addition(100,700);

let number = 67;
function cube(){
    return number*number*number;
}
console.log(cube());

//function expression
const multiply =function(x,y){
return x*y;
}
console.log(multiply(5,8));

//arrow function
const divide=(a,b)=>{
return a/b;
}
console.log(divide(100,20));




