const sumAll = function(...args) {
  let input =[...args];
  let sortedInput = input.sort();
  if (sortedInput[0] < 0 || sortedInput[sortedInput.length] < 0) return 'ERROR';
  if (!Number.isInteger(sortedInput[0]) || !Number.isInteger(sortedInput[sortedInput.length-1])) return 'ERROR';
  


  summingArray = [];
  let sum = 0;
  
  

  for (let index = sortedInput[0]; index <= sortedInput[sortedInput.length-1]; index++) {
    summingArray.push(index);
  }

  summingArray.reduce((accumulator, next) => {
    sum = accumulator + next;
    return sum;
  })

// summingArray.forEach((item) => {
//   sum += item;
// });

console.log(sum);
  return sum;
};




// const sumAll = function(min, max) {
//   if (min < 0 || max < 0) return 'ERROR';
//   if (!Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR';
  
//   let input = [...arguments];
//   sortedInput = input.sort();
//   summingArray = [];
//   let sum = 0;

//   for (let index = sortedInput[0]; index <= sortedInput[1]; index++) {
//     summingArray.push(index);
//   }

//   summingArray.reduce((accumulator, next) => {
//     sum = accumulator + next;
//     return sum;
//   })

// // summingArray.forEach((item) => {
// //   sum += item;
// // });

// console.log(sum);
//   return sum;
// };

sumAll(2,4);

// Do not edit below this line
module.exports = sumAll;
