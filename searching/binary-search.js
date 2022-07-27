const number = [1, 2, 3, 5, 9, 70, 90];


function RecusrionBinarySearch(array, low, high, element) {
  if(low > high) {
    return false;
  }
  let mid=  Math.floor((low + high) / 2);
  if (array[mid] == element) {
      return true;
    }
  else if(array[mid] < element) {
    return RecusrionBinarySearch(number, mid+1, high, element);
  } else {
   return RecusrionBinarySearch(number, low, mid-1, element);
  }
}



function iterativeBinarySearch(array, element) {
  const len = array.length;
  let start = 0;
  let end = len - 1;
  let mid = Math.floor((start + end) / 2);

  while (start <= end) {
    if (array[mid] == element) {
      return true;
    } else if (array[mid] < element) {
      start = mid+1;
      mid = Math.floor((start + end) / 2)
    } else {
      end = mid-1;
      mid = Math.floor((start + end) / 2)
    }
  }
  return false;
}

console.log(iterativeBinarySearch(number, 70));
console.log(RecusrionBinarySearch(number, 0, number.length-1, 70));

