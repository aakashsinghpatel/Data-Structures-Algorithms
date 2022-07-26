const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  let len = array.length;
  for (let i = 1; i < len; i++) {
    if (array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0])
    } else {
      if (array[i] > array[i - 1]) {
        for (let j = 1; j < i; j++) {
          if (array[i] >= array[j - 1] && array[i] < array[j]) {
            array.splice(j, 0, array.splice(i, 1)[0])
          }
        }
      }
    }
  }
}

insertionSort(numbers);
console.log(numbers);