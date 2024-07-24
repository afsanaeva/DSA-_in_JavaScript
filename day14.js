// print odd num from 1 - 10

function oddNum(n) {
  for (let n = 0; n <= 10; n++) {
    if (n % 2 == 0) continue;
    console.log(n);
  }
}

const result = oddNum(1);
console.log(result);

// print even num from 1 - 10
function evenNum(i) {
  for (let i = 0; i <= 10; i++) {
    if (i % 2 != 0) continue;
    console.log(i);
  }
}

const result2 = evenNum(1);
console.log(result2);
