/*
Create a function that returns any of the items you can afford in the store with the
 money you have in your wallet. Sort the list in alphabetical order.

Examples
itemsPurchased({
  Water: "$1",
  Bread: "$3",
  TV: "$1,000",
  Fertilizer: "$20"
}, "$300") ➞ ["Bread", "Fertilizer", "Water"]

itemsPurchased({
  Apple: "$4",
  Honey: "$3",
  Fan: "$14",
  Bananas: "$4",
  Pan: "$100",
  Spoon: "$2"
  }, "$100") ➞ ["Apple", "Bananas", "Fan", "Honey", "Pan", "Spoon"]

itemsPurchased({
  Phone: "$999",
  Speakers: "$300",
  Laptop: "$5,000",
  PC: "$1200"},
"$1") ➞ "Nothing"
Notes
Return "Nothing" if you can't afford anything from the store. */
function itemsPurchased(obj,money){
  let kala=[];
  for(let key in obj){
  let changedMoney= parseFloat( obj[key].slice(1).replaceAll(',',''));
 if( parseFloat(money.slice(1))>=changedMoney){
  kala.unshift(key)
 } 
  }if(kala.length>=1){
    return kala.sort();
  }else{
    return "NOTHING!";
  }
    
  
 

}
console.log(itemsPurchased({
  Phone: "$999",
  Speakers: "$300",
  Laptop: "$5,000",
  PC: "$1200"},
"$10") );