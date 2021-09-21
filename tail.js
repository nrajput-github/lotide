
let tail = function(arr) {
  let arr1 = [];
  for (let i = 1; i < arr.length; i++) {
    arr1.push(arr[i]);
  }
  return arr1;
};
module.exports = tail;



// no need to capture the return value since we are not checking it