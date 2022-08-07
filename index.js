function isPalindrome(word) {
  // Write your algorithm here
  myArray = word.split("") 
  for (let i = 0; i < myArray.length / 2; i++) {
    if (myArray[i] = myArray[myArray.length - i]) {
    } 
  }
  return true
}


/* 
  Add your pseudocode here
/ getting string letters one by one by array
/ find out the array.length 
/ check if array[0] = last array length is same letter   
/ +1 -1 

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
