const repeatString = function(word, value) {
  if(value >= 0) {  
  repeatedString = '';
  for (let i = 0; i < value; i++){
  repeatedString += word;
  }
  return repeatedString
  }
  else {
    return 'ERROR';
  }
};


// const repeatString = function(word, value) {
//   if(value >= 0){
//     let repeatedWord = [];
//     for (let i = 0; i < value; i++){
//       repeatedWord.push(word);
//     }
//       return repeatedWord.join('');
//   }
//   else{
//     return 'ERROR';
//   };
// };
// repeatString('test', 5);

// Do not edit below this line
module.exports = repeatString;
