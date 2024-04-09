let numberAry = [2, 6, 0, -3, -2, 4, 10, 7];
//targetSum=8 //Result=[2,6]or[10,-2]
let targetSum = 8;
function sum(numberAry, targetSum) {
  let result = [];
  for (i = 0; i < numberAry.length; i++) {
    for (j = i + 1; j < numberAry.length; j++) {
      if (numberAry[i] + numberAry[j] === targetSum) {
        result.push([numberAry[i], numberAry[j]]);
      }
    }
  }
  return result;
}
let pairs = sum(numberAry, targetSum);
console.log("Result:", pairs);