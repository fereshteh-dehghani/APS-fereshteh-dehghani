let obj1={0: 6, 1: 1, 5: 3, 12: 2};
let objSort=(obj)=>{
    let obj2={};
    let arr1=Object.entries(obj);
    // let arr2=[];
let arr2=arr1.sort((a, b)=> {
    return a[1] - b[1];
}).reverse();
obj2=arr2.forEach(element=>{
    obj[element[0]]=element[1];
})
  
;
// obj=arr2.forEach(element => {
//     for (const key in object) {
//        obj[element[0]]=element[1];
//     }
    
// });
return obj2;
}
console.log(objSort(obj1));