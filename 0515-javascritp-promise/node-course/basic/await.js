// Promise 是一個表示非同步運算的最終完成或失敗的物件。

let dt = new Date();
console.log(`起床了 at ${dt.toISOString()}`);

let doWork = function (job, timer) {
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

async function main() {
  // 刷牙 (3000) -> 吃早餐 (5000) -> 寫功課 (3000)

  // let doBrushPromise = doWork('刷牙', 3000);
  // let result = await doBrushPromise;

  try {
    // 可以在這裡拿到 promise 的結果
    let resultBrush = await doWork('刷牙', 3000);
    console.log(resultBrush);

    let resultEat = await doWork('吃早餐', 5000);
    console.log(resultEat);

    let resultHW = await doWork('寫功課', 3000);
    console.log(resultHW);
  } catch (e) {
    console.error('這裡是try-catch', e);
  }
}
main();
