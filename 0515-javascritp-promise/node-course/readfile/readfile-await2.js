const fs = require('fs/promises');

(async () => {
  let p = await fs.readFile('test.txt', 'utf-8');
  console.log(p);
})();
