const middle = function(arr) {
  let midIndex;
  let myArr = [];
  //length 0 1 2 empty array
  if (arr.length <= 2)
    return myArr;

  midIndex = arr.length / 2;
  if (arr.length % 2 === 0) {
    myArr.push(arr[midIndex - 1]);
    myArr.push(arr[midIndex]);
  } else {
    myArr.push(arr[midIndex]);
  }
  return myArr;
    
};
module.exports = middle;