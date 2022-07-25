function reverseTheString(str) {
  // return str.split('').reverse().join('');
  return [...str].reverse().join('');
  
}

// console.log(reverseTheString('AKash'));



function mergeSortedSort(arr1, arr2) {
  const arr3=[...arr1, ...arr2];
  return arr3.sort((a,b)=> a-b);
}

/*  
O(m+n)
O(m+nlogm+n)== 
*/

console.log(mergeSortedSort([0,3,2,6,7],[30,67,98]));