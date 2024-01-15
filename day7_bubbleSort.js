function bubbleSort(array) {
  for (let i = array.length; i > 0; i--) {
    for (j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

const result = bubbleSort([4, 7, 66, 234, 11, 0, 40, 100]);
console.log(result);

// optimize way
function bubbleSorts(array) {
  for (let a = array.length; a > 0; a--) {
    console.log(a);
    let isSwap;
    for (let b = 0; b < a - 1; b++) {
      if (array[b] > array[b + 1]) {
        [array[b], array[b + 1]] = [array[b + 1], array[b]];
        isSwap = true;
      }
    }
    if (!isSwap) {
      break;
    }
  }
  return array;
}

const sortArray = bubbleSorts([89, 1, 2, 33, 40, 59, 67,]);
console.log(sortArray);
