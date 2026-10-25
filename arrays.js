// marks=[90,89,78,67,34]
// // console.log(marks);
// // console.log(marks.length);
// // console.log( typeof marks);
// marks[3]=90
// console.log(marks)

// let hereos=["Spiderman","iron man","thor","doom","lockey","Captain america","Vision","Wanda","Natasha","Hulk","Antman"]
// for(let idx=0 ;idx < hereos.length; idx++){
//     console.log(hereos[idx]);
// }

// //accessing the elements witht the for off loop:-
// for( let item of hereos){
//     console.log(item);
// }





//First practice question on array:->
// for a given array with marks of student find the avagerae of marks
/*let marks=[90,89,78,67,56]

let sum=0;
for( let mark of marks){
 sum=sum+mark;
}
 console.log(sum);
let avg=sum / marks.length;
console.log(avg)
*/




//Question no 2
/*For a given array with prices of 5 items---->[250,645,300,900,50],
All items have an offer of 10%off on them, change the array to store the final price after applying the offer.*/

// using for loop
/*let items=[250,645,300,900,50]

for(let i=0; i<items.length; i++){
    let offer = items[i]/10;
    items[i]=items[i]-offer;
    
}
console.log("Items value after the offer is",items);



*/



//Array methods:-
/*
let foodItems=["Potaoto","Litchi","apple","Vadapav","Samosa","Patis"]
// foodItems.push("Chips",123)
console.log(foodItems);
// foodItems.pop();

// console.log(foodItems);
console.log(foodItems.toString());

*/


//combine two arrays:-

// We can combine multiple arrays also...
/*
let marvel_hereos=["Spiderman","iron man","thor"]
let dcheros=["Superman","Batman"]
let indianheros=["Shaktiman","Krish"]

let heros=marvel_hereos.concat(dcheros,indianheros)
console.log(heros);

console.log(dcheros);
console.log(marvel_hereos);
console.log(indianheros)
*/




//UNSHIFT METHOD:-->
// It is mainly used to add the array element at the startTransition......
let marvel_hereos=["Spiderman","iron man","thor"]
// marvel_hereos.unshift("antman");

// console.log("deleted value",deleted_value);

//SHIFT IS USED TO REMOVE THE ELEMENT WHICH IS PRESENT IN THE ARRAY AT FIRST...
let deleted=marvel_hereos.shift();
console.log("deleted value is as follows", deleted);


console.log("xyz".toLocaleUpperCase());
