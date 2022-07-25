class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key, value) {
    const hash = this._hash(key);
    if(!this.data[hash]) {
      this.data[hash] = []
    }
    this.data[hash].push([key, value])
    return this.data;
  }

  get(key) {
    const hash = this._hash(key);
    if(this.data[hash]) {
      for (let item of this.data[hash]) {
        if (item[0]== key) return item;
      }
    }
    return undefined;
}

  keys() {
    const keys = [];
    for(let hashData of this.data) {
      if(hashData ) {
        if (hashData.length >1) {
        for(let item of hashData) {
          keys.push(item[0]);
        }
        } else {
          keys.push(item[0][0]);
        }
      }
    }
    return keys;
  }
}

const myHashTable = new HashTable(2);
console.log(myHashTable.set('grapes', 10000));
console.log(myHashTable.get('grapes'))
console.log(myHashTable.set('apples', 9))
console.log(myHashTable.get('apples'))

console.log(myHashTable.keys())
