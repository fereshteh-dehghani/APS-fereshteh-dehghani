/*
Given an array, create a function that returns an object detailing how many 
times each element was repeated. Sort the object by value in descending order.

Examples
countRepetitions(["cat", "dog", "cat", "cow", "cow", "cow"]) ➞ { cow: 3, cat: 2, dog: 1 }

countRepetitions([1, 5, 5, 5, 12, 12, 0, 0, 0, 0, 0, 0]) ➞ { 0: 6, 5: 3, 12: 2, 1: 1 }

countRepetitions(["Infinity", "null", "Infinity", "null", "null"]) ➞ { null: 3, Infinity: 2}
Notes
The array elements can be anything.
*/
function countRepetitions(array){
let obj={};
array=array.sort();

array.forEach(element => {
    let count=0;
    for(let i=0;i<array.length;i++){
        if(array[i]===element){
          count++
        }
        obj[element]=count;
    }
});
let arr=Object.values(obj).sort();
let objSort={};
arr.map(element=>{
    for(let key in obj){
        if(obj[key]===element){
return objSort[key]=element;
        }
    }
})
// for(let el in obj){
//     obj[el].sort();
// }
return objSort;
}
console.log(countRepetitions([1, 5, 5, 5, 12, 12, 0, 0, 0, 0, 0, 0]) );
console.log(countRepetitions(["cat", "dog", "cat", "cow", "cow", "cow"])
);
console.log(countRepetitions(["Infinity", "null", "Infinity", "null", "null"])
);