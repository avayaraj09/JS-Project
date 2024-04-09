let sentence ="google newS is a newS aggregratoR servicE developed by Google.";
//result= Google News Is A News Aggregator Service Developed By Google.

let sentence1 = sentence.toLowerCase().split(" ");
let upper = sentence1.map((word) => {
capital = word[0].toUpperCase() + word.slice(1);
return capital;
});
console.log(upper.join(" "));