let ProblemArray = [-1, 2, -4, -6, 2, 3, 4, 2, 5, 8, 2, 7, 1];
let toMove = 2;

let newArray=[];
let array1=[];
let array2=[];

let filteredArray=ProblemArray.filter((positive) => {
    if (positive > 0) return positive;
}).forEach((numb) => {
    if(numb ==2){
        array1.push(numb);
    }else{
        array2.push(numb)
    }
})
newArray = newArray.concat(array2,array1)
console.log(newArray)