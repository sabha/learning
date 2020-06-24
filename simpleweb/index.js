const express = require('express');
const app = express();

// Single Route handler
app.get('/', (req, res)=>{
 res.send('Hi There , How are you?');
});

app.listen(8080, () => {
 console.log('Listening on Port 8080');
});
