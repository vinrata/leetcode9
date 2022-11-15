var isPalindrome = function(x) {
    
let str = x.toString();

console.log("int: "+x);
console.log("string :"+str);
console.log("------------------");

let r = str.split('').reverse().join('');

 console.log(r);

if (str !== r){
  console.log("false");
  return false;
  
} else {
  console.log("true");
  return true;
}
};


let x = 121;
isPalindrome(x);
