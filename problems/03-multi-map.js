/*******************************************************************************
Write a function `multiMap` that accepts a value, a number n, and a callback.
The function should return the new value that results from running the original value
through the callback n times.

Examples:

let result1 = multiMap(7, 2, function(n) {
  return n * 10;
  // 7 * 10 = 70
  // 70 * 10 = 700
});
console.log(result1); // 700

let result2 = multiMap(7, 3, function(n) {
    return n * 10;
    // 7 * 10 = 70
    // 70 * 10 = 700
    //700 * 10 = 7000
});
console.log(result2); // 7000

let result3 = multiMap("hi", 5, function(s) {
  return s + "!";
  // hi!
});
console.log(result3); // hi!!!!!
*******************************************************************************/

function multiMap(val, n, cb) {
  let temp = cb(val)
  for (let i = 0; i < n-1; i++) {
      temp = cb(temp)
    }
 return temp
}


let result1 = multiMap(7, 2, function(n) {
  return n * 10;
});
console.log(result1); // 700

let result2 = multiMap(7, 3, function(n) {
  return n * 10;
});
console.log(result2); // 7000

let result3 = multiMap("hi", 5, function(s) {
return s + "!";
// hi!
});
console.log(result3); // hi!!!!!

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = multiMap;
} catch(e) {
  return null;
}
