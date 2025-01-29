function isPalindrome(word) {
  // Write your algorithm here
}

/* 
  Add your pseudocode here

  slice the parameter into an array

  //switch order of the letters:
  (((for loop:
    i = array.length-1; i > 0; i--;
    add each letter array[i] into new array)))
    foreach letter in array, .unshift into new array

  check if both arrays === each other

  return true or false

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
