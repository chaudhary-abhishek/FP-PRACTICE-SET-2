const numbers = [1,2,3,45,3,43,35];
const isDivisibleBy7 = number => number%7===0;
// console.log(isDivisibleBy7(77));

console.log(numbers.find(isDivisibleBy7));