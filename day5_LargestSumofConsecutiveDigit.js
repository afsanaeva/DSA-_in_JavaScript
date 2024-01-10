function FindLargest(array, num) {
    if (num > array.length) {
      throw new Error("num is greater than array length");
    } else {
      let max = 0;
      for (let i = 0; i < array.length - num + 1; i++) {
        let tmp = 0;
        for (let j = 0; j < num; j++) {
          tmp += array[i + j];
        }
        if (tmp > max) {
          max = tmp;
        }
      }
      return max;
    }
  }
  
  const result = FindLargest([1, 2, 3, 4, 3, 5, 4, 6, 7, 81, 3], 3);
  console.log("result", result);
  