// read stock no from mysql database

// mysql2 是一個第三方套件
// npm i mysql2
// 引用進來
const mysql = require('mysql2/promise');

require('dotenv').config();

(async () => {
     const connection = await mysql.createConnection({
          host: process.env.DB_HOST,
          port: process.env.DB_PORT,
          user: process.env.DB_USER,
          password: process.env.DB_PWD,
          database: process.env.DB_DB,
     });

     let [data, fields] = await connection.execute('SELECT * FROM stocks');
     console.log(data);

     // results [
     //     [],
     //     []
     // ]
     //let data = results[0];
     //let fields = results[1];

     connection.end();
})();
//123