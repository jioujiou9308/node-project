let a = 1;
let b = 2;
console.log('before', a, b); // 1, 2

// TODO:
let temp = a; // temp = 1
a = b;
b = temp;

console.log('after', a, b); // 2, 1
