// let myArray = [-3,-2,-1,0,1,2,3,4,5];
let word = 'cat';
let myArray = ['cat', 'dog', 'concat', 'white', 'blue'];

let matchArray = myArray.filter((element) => {
//     if (element.includes(word))
//    return element

    return element.includes(word);

});

console.log (matchArray);