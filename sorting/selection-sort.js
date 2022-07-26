const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  const len =array.length;
 for (let i=0 ;i < len; i++) {
      for (let j=i ;j< len; j++) {
        if (array[i] > array[j])
          [array[i],array[j]] =[ array[j],array[i]]
    }
  }
  return array;
}

console.log(selectionSort(numbers));