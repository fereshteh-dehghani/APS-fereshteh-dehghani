let dice1=Math.floor((Math.random()*6)+1);
let dice2=Math.floor((Math.random()*6)+1);
console.log(dice1 + dice2);
let lang=prompt('which do you like language programming?');
alert(`your choce is ${lang} thanks`);
let ageStr=prompt("How old are you?");
let age=Number(ageStr);
let feedback= age>=16 ? `You're eligible to goin` :
`you must be least 16 year old to join`; 
alert(feedback);
////////////////////////////////////////////////////////////////////
////////////////////// IF CONDITION ///////////////////////////////
/* even or odd number */
let number=prompt('dear! please enter a number?');
if(number%2===0){
    alert(`${number} is a even number`);
}else{
    alert(`${number} is a odd number`);
}
///////////////////////////////////////////////////////////////////////
////////////////////// Terafical Signal //////////////////////////////
let teraficStr='go';
if(teraficStr==='stop'){
    console.log(`Red`);
}else if (teraficStr==='slow'){
    console.log('yellow');

}else if (teraficStr==='go'){
    console.log('green');
}else{
    console.log('purple');
}


