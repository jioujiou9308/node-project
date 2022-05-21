// Big O 用來評斷程式的「複雜度」
// 比較的是步驟數量，而不是絕對時間
// 通常也是討論 n 比較大的情況

// 回傳 1 + 2 + ... + n 的結果
function sum1(n) {
  // O(n) 的寫法
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    // 當 n=1 時，這行會執行 1 次
    // 當 n=10 時，這行會執行 10 次
    // 當 n=1000 時，這行會執行 1000 次
    sum += i;
  }
  return sum;
}

// O(1) 的寫法
function sum2(n) {
  // 當 n=1 時，這行會執行 1 次
  // 當 n=10 時，這行會執行 1 次
  // 當 n=1000 時，這行會執行 1 次
  return ((n + 1) * n) / 2;
}

// reduce 版本
function sum3(n) {
  return Array.from({ length: n }, (_, i) => i + 1).reduce((sum, item) => sum + item, 0);
}

// recursive 版本: 一直呼叫自己，直到停止點
function sum4(n) {
  if (n === 1) {
    return n;
  }
  return sum4(n - 1) + n;
}

console.log(sum4(10));

console.time('SUM1');
for (let i = 0; i < 10000; i++) {
  sum1(100000);
}

console.timeEnd('SUM1');

console.time('SUM2');
for (let i = 0; i < 10000; i++) {
  sum2(100000);
}
console.timeEnd('SUM2');

// O(1) 跟 O(n) 比較，O(1)比較快
// 在數字比較小的情況下壓力不大的情況下是看不出來的甚至O(1)比較慢
// 在數字很大的情況下比較看得出差別
