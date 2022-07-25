

/*Approach 1  
O(m+n) + O(m+nlog m+n)
*/
function mergeSortedSort1(arr1, arr2) {
  const arr3=[...arr1, ...arr2];
  return arr3.sort((a,b)=> a-b);
}


/*  Approach 2nd: O(m+n) */

function mergeSortedSort2(arr1, arr2) {

  const arr3 =[];

  if (arr1.length == 0) return arr2;
  else if (arr2.length == 0) return arr1;

  let i=0,j=0;
  let arrItem1 = arr1[i];
  let arrItem2 = arr2[j];

  while (arrItem1 || arrItem2) {
    console.log(arrItem1, arrItem2)
    if ( !arrItem2 || arrItem1 < arrItem2) {
      arr3.push(arrItem1);
      i++;
      arrItem1 = arr1[i];
    } else {
       arr3.push(arrItem2);
      j++;
      arrItem2 = arr2[j];
    }
  }
  return arr3;
}


console.log(mergeSortedSort2([0,3,2,6,7],[30,67,98]));