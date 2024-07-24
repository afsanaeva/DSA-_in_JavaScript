// count how many 2 divides 100
let x = 100;
let ctn = 0;

function dividesTwo(x) {
  while (x % 2 == 0) {
    x = x/2;
    ctn++;
  }
}
const result = dividesTwo();
console.log(result);