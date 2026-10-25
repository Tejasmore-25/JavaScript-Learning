// function defination:-

// function functionName(){

//     //do some work
// }

// function functionName(Para1,Para2.....){

//     //Do some work
// }




// Function Call:->

// functionName();


//Fuction che je parameters astat te local varaibles mhnun act kartat for that function only and it has block scope means it can be access only inside the block of that function




function myFunction(msg) {

    console.log("Hello i qm learning javascript!!!");
    console.log(msg)
}


myFunction("yaaa broooo ");


//Calculate the sum of two numbers...
function add2num(a,b){
    console.log(a+b);

}

add2num(1,2);




//Arrow function
const arrowsum=(a,b)=>{
    console.log(a+b);
};

//to run this arraow function we have to use the browser and the arraow function will return the function itself 



//Practice question
// count the vowels in the steing by using the function

function countvowels(str){
    let count=0;
    for(const char of str){
        if(char==="a"|| char==="e" || char==="i" || char==="o" || char==="u"){
            count++
        }
    }
    console.log(count)
}

countvowels("Apna college")