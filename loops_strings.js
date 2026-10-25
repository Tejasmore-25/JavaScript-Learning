//Loops in JS:-

/*
//For Loop in JavaScript
for(let i=1;i<=10000;i++){
    console.log("tejas")
}
console.log("Loop has ended")

//calculate sum of 1 to n

let sum=0;
for(let i=1;i<=5;i++){
    sum=sum+i;
}
console.log("sum of the given numbers is :-",sum);
*/



//While Loop:-
// let i =1;
// while(i<=5){
//     console.log("i:-",i);
//     i++;
// }




// //Do while loop
// let i=1;
// do{
//     console.log("i=",i);
//     i++;
// } while(i<=5);



/*
//for off loop
let str="apna college";
let size = 0;

for(let i of str){
    console.log("i=",i);
    size++;
}
console.log("size of the string is",size)
*/



//for in loop
/*let student={
    name:"rahul kumar",
    age:20,
    cgpa:7.5,
    ispass:true


};

for(let i in student){
    console.log("i=",i ,"value:-> ",student[i])
}
*/




//Practice questions on the loops:-
// for(let i=1;i<=100;i++){
//     if(i%2===0){
//         console.log("The even numbers are",i)
//     }

// }



//practice question 2


// let gamenum=34;

// let usernum=prompt("Enter a number/guess a nuber:-");

// while(usernum != gamenum){
//    usernum= console.log("Guess the number again....");
// }

// console.log("Congratulations you guess the correct number....");






//Strings in javascript...
let str="TejasMore"
// console.log(str[7])

// console.log(str.length);
// newstring= str.toUpperCase();
// console.log(newstring)

// console.log(str.toUpperCase())



// console.log(str.slice(1,7))   
// // start and end and the end position in not included

// let str1="tejas";
// let str2="More";

// let res=str1.concat(str2);
// console.log(res)





//practice question on strings
let fullname=prompt("Enter your fullname without spaces");
let username= fullname.concat("@")+ fullname.length;
console.log(username)
