function isPalindrome(word) {
  // Write your algorithm here

  //define empty arrays
  const array = [];
  const newArray = [];

  //add each letter to array, forwards and backwards
  for (i = 0; i < word.length; i++) {
    array.push(word[i]);
    newArray.unshift(word[i]);
  }

  //log the arrays
  console.log(array);
  console.log(newArray);

  //check if they're the same, and return true or false
  if (array.toString() === newArray.toString()) {
    return true;
  } else {
    return false;
  }

}

//test
// isPalindrome('mom');

/* 
  Add your pseudocode here

  slice the parameter into an array
  define newArray

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
