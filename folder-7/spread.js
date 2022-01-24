//////////////////////// Spread ///////////////////////////////////////////////////////
 const odd=[11,13,15,17,18];
 const combined=[1,3,5,7,9,...odd];
 console.log(combined);

 const name=['Fereshteh','Zainab','Aida','Bahar','Omid'];
 const studentNames=['Amin','Beny','Sara',...name];
 console.log(studentNames);
/* spread operators */
function printName(name1,name2,name3,name4,name5){
    console.log(name1,name2,name3,name4,name5);
}
printName(...name);
/* push an array into an array*/
const mentorsName=['Azam','Maryam','Fatemeh'];
const allNameAps=[...mentorsName];

allNameAps.push(...name);
console.log(allNameAps);
/* Java Script spread operator and chars */
let night='this night is a lot of fun';
const charsName=[...night];
console.log(charsName);


