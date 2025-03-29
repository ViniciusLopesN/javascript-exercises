// const reverseString = function(string) {

// splitString = string.split('');

// let reversedString = ''
//   for (let index = splitString.length-1; index >= 0; index--) {
//     reversedString += splitString[index];
//   }

// return reversedString;
// };

function reverseString(string) {
  return string.split('').reverse().join('');
  
}

// Do not edit below this line
module.exports = reverseString;
