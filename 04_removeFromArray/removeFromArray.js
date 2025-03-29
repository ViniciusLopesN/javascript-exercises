const removeFromArray = function(array, ...args) {
  const removedItems = args;

  let newArray = [];

  array.forEach(element => {
    if (!removedItems.includes(element)) {
      newArray.push(element);
    }
    
  });

  ;

  console.log(newArray);
  return newArray;
};


removeFromArray([1,2,3,4,5,6], 4, 5, 6);
// Do not edit below this line
module.exports = removeFromArray;
