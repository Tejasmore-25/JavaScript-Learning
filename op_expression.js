// console.log("operators in javascript")
// let a=45;
// let b= 5;

// console.log(a/b);
// console.log(++a);
// console.log(a)


//comaprison opearators
// let a=3;
// let b = 6;

// console.log(a==b)




// let a=3;
// let b="3";

// console.log(a==b);
/* here in the variable b we are storing the value in the string format but in js the number which stores in 
the string foramt get formatted to the number and then comapres with the previous varible*/


 /*but if you Want stricter rule to check the equality by data type as well as by value then use,
=== */







//Logical Opearator:-
// let a = 6;
// let b = 6;

// let cond1= a>=b;
// let cond2= a===b;
// console.log(cond1 && cond2)

// console.log("!(a==b)", !(a==b));
















//conditional statements:-
/*
let mode;
let color;
if(mode==="dark"){
    color="black";
}


let age=7;
if(age>=18){
    console.log("You are eligible for the driving....");

}
else{
    console.log("you are not eligible");
}



//even odd
let num=10;

if(num%2===0){
    console.log("even ");

}
else{
    console.log("odd");
}


let experience=35;

if(experience>18){
    console.log("junior");
}
else if(experience>30){
    console.log("senior");
}
else{
    console.log("middleman")
}

*/





//Ternary opearator:---
// condition?true op: false op

let age=8;

 let result=age>18 ? "adult" : "not adult";
console.log(result)






// practice questions.


 //enter a number using a prompt and then check that number is multiple of 5 or not...
 let num=prompt("Enter a number:-");
 if(num%5===0){
    console.log("The number is multiple of 5");
 }
else{
    console.log("the number is not multiple of 5");
}





//grades and their scores accordingly...
let score=75;
let grade;

if(score>=90 && score<=100){
    grade="A";
}
else if(score>=70 && score<=89){
    grade="B";
}
else if(score>=60 && score<=79){
    grade="c";
}

console.log("according to your marks your grade is", grade)