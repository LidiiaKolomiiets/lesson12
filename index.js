let numberSum = 0;

function sum(number) {
   return numberSum = numberSum + number;
};


console.log(sum(3));// 3
console.log(sum(5)) // 8 
console.log(sum(20)) // 28
console.log(sum(20)) // 48



function test() {
    let numberSum2 = 0;
    return function(m) {
      return numberSum2 = numberSum2 + m;
    }
  }
  let sum2 = test();
  console.log(sum2(3));  // 3
  console.log(sum2(5));  // 8
  console.log(sum2(20));  // 28