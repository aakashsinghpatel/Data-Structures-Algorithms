//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...

let calculation1 = 0;
function febonaci(n) {
  calculation1++;

  if (n < 2) {
    return n;
  }
  return febonaci(n - 1) + febonaci(n - 2);
}


console.log(febonaci(35));
console.log('calculations:', calculation1)

let dynamicCalculation = 0;
function memoizationFabonacci() {
  let FabonacciCache = {};

  var febonaci = function(n) {
    dynamicCalculation++;
    if (n in FabonacciCache) {
      return FabonacciCache[n];
    }
    if (n < 2) {
      return n;
    }
    FabonacciCache[n - 1] = febonaci(n - 1);
    FabonacciCache[n - 2] = febonaci(n - 2);
    return FabonacciCache[n - 1] +
      FabonacciCache[n - 2];
  }

  return febonaci;
}

var dynamicFabonaci = memoizationFabonacci();
console.log(dynamicFabonaci(35))
console.log('calculations:', dynamicCalculation)



/*  Bottom up approach*/

function faboMaster(n) {
  let answer = [0, 1];
  for (let i = 2; i < n; i++) {
    answer.push(answer[i - 1] + answer[i - 2]);
  }
  return answer.pop()
}


console.log(faboMaster(50))
/*  ==============================*/
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
/* let calculations = 0;
function fibonacci(n) { //O(2^n)

  if (n < 2) {
    return n
  }
  return fibonacci(n-1) + fibonacci(n-2);
}

function fibonacciMaster() { //O(n)
  let cache = {};
  return function fib(n) {
    calculations++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n-1) + fib(n-2);
        return cache[n];
      }
    }
  }
}

function fibonacciMaster2(n) {
  let answer = [0,1];
  for ( let i = 2; i <= n; i++) {
    answer.push(answer[i-2]+ answer[i-1]);
  }
  return answer.pop();
}

const fasterFib = fibonacciMaster();

console.log('Slow', fibonacci(35))
console.log('DP', fasterFib(100));
console.log('DP2', fibonacciMaster2(100));
console.log('we did ' + calculations + ' calculations');

 */