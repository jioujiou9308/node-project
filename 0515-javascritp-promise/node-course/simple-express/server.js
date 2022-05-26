const express = require('express');
const app = express();

app.get('/', (request, response, next) => {
     response.send("OK");
});

app.get('/about', (request, response, next) => {
     response.send("About me456");
})

app.listen(3001, () => {
     console.log('start server at port 3000');
})