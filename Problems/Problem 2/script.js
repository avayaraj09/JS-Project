let array = [25, 92, 72, 5, 3, 400, 25, 600, 7, 9, 32];
// largest=600, smallest=3
//answer1:
let array1 = [25, 92, 72, 5, 3, 400, 25, 600, 7, 9, 32];
sorted = array1.sort((a, b) => a - b);
console.log("Maximum is " + sorted.pop());
console.log("Minimum is " + sorted.shift());

//answer2:
// function accending(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (j = i + 1; j < array.length; j++) {
//       if (array[j] < array[i]) {
//         let a = array[j];
//         array[j] = array[i];
//         array[i] = a;
//       }
//     }
//   }
//   return array;
// }
// let sorted = accending(array);
// console.log("Minimum is:" + sorted[0]);
// console.log("Maximum is:" + sorted[sorted.length - 1]);