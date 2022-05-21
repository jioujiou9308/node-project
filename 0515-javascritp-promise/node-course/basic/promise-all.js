// Promise 是一個表示非同步運算的最終完成或失敗的物件。

// 1. 非同步
// 2. 「最終」成功、「最終」失敗
// 3. 物件 --> new Promise();

// -> 用來解決 callback hell

// new Promise(executor);
// new 的時候要傳入 executor --> executor 也只是一個函式

// function executor(resovle, reject) {
//   // 非同步工作
//   // 做成功的時候，你就呼叫 resolve
//   // 做失敗的時候，你就呼叫 reject
// }

let dt = new Date();
console.log(`起床了 at ${dt.toISOString()}`);

let doWork = function (job) {
  let timer = Math.floor(Math.random() * 5000);
  return new Promise((resolve, reject) => {
    // 做非同步工作
    setTimeout(() => {
      let dt = new Date();
      let result = `完成工作: ${job} at ${dt.toISOString()}`;
      resolve(result);
      // reject('故意失敗');
    }, timer);
  });
};

// 三件事同時做
// 刷牙 (3000)
// 吃早餐 (5000)
// 寫功課 (3000)
// 三件事情都做完，吃午餐
let doBrushPromise = doWork('刷牙');
let doEatPromise = doWork('吃早餐');
let doHWPromise = doWork('寫功課');
// 三個都完成，這個 Promise.all 才會完成
// let p = Promise.all([doBrushPromise, doEatPromise, doHWPromise]).then((values) => {
//   console.log(values);
// });
// console.log('p: ', p);
(async () => {
  let values = await Promise.all([doBrushPromise, doEatPromise, doHWPromise]);
  console.log(values);
})();
