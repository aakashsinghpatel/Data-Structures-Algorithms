// BigO Exercise 1

function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) { // O(n)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++;// O(n)
  }
  return a;// O(1)
}

/*  3+ n+n+n+n+n== 3+ 4n*/

/* 
Answer:  O(3+ 4n) ==== 0(n)
*/


// BigO Exercise 2

function anotherFunChallenge(input) {
  let a = 5; //O(1)
  let b = 10; //O(1)
  let c = 50; //O(1)
  for (let i = 0; i < input; i++) { //O(n)
    let x = i + 1; //O(n)
    let y = i + 2;//O(n)
    let z = i + 3;//O(n)

  }
  for (let j = 0; j < input; j++) { //O(n)
    let p = j * 2; //O(n)
    let q = j * 2;//O(n)
  }
  let whoAmI = "I don't know"; //O(1)
}
// O(4) + 4n+ 3n


/* 
Answer:  O(4+ 7n)==   O(n)
O(4+ 5n) <Only with step not loop step>
*/

// Log all pair of array
ar = [1,2,3,4,5,6,7]
let 
  count = 0;
for (let i=0; i<ar.length; i++) {
  for (let j=0; j<ar.length; j++){
    count++;
    // console.log('pair no.',count, " :(", ar[i], ",",ar[j], ")" )
  }
}

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}


