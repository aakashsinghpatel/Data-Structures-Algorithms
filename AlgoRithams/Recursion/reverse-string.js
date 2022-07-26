function reverseStringRecusrion(str) {
  let len = str.length;
  if (len == 1) {
    return str;
  }
  return str[len - 1] + reverseStringRecusrion(str.substring(0, len - 1).slice())
}

console.log(reverseStringRecusrion('yoyo mastery'))

function reverseStringIterative(str) {
  let answer = '';
  for (let i = str.length - 1; i >= 0; i--) {
    answer += str[i];
  }
  return answer;
}



function reverseStringRecursive(str) {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

console.log(reverseStringIterative('yoyo mastery sdsds'))