

const arr=['a', 'b', 'c','d']

/*  Access/ look up*/


console.log('traverse',arr[2])  // O(1)

/*Push  */

arr.push('r');  // O(1)
/*  

['a', 'b', 'c','d', 'r']
0      1    2    3    4
*/
console.log('push',arr); 
/* Pop */

arr.pop();  // O(1)
/*  
['a', 'b', 'c','d']
0      1    2    3 
*/
console.log('pop',arr); 



/* Insert  */

arr.unshift('0', '1') // O(n)

/*  
['a', 'b', 'c','d']   =====>
0      1    2    3 

['0', '1','a', 'b', 'c','d']
0      1    2    3   4    5

*/
console.log('unshift',arr); 


/* Delete */


/* 

shift==> O(n)
splice==> (insert/delete)=> O(n)
*/




newArr = new Array(5).fill('1')
console.log(newArr);
newArr.push(4545,34,3443,3434);
console.log(newArr)


/* Implementation of Array  */


class MyArray{
  constructor() {
    this.data={};
    this.length =0;
  }


  get(index) {
    return index <= this.length-1 ? this.data[index]: "Out of index;"
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return {...this.data};
  }

  pop() {
    data = this.data[this.length-1];
    delete this.data[this.length];
    this.length--;
    return data;
  }

  delete(index) {
    if(index > this.length-1) return "out of index";
    const dataTobeDelete = this.data[index];
    shiftToleft(index);
    this.length--;
    return {...this.data}
  }
}