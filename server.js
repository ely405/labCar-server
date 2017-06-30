const express = require('express');
const path = require('path');
const app = express();

app.use('/static', express.static(path.join(__dirname, 'node_modules')));
app.use('/static', express.static(path.join(__dirname, 'public')));


app.get('/', (req, res)=>{
  res.sendFile(__dirname+'/public/index.html');
});
const port = process.env.PORT || 2000;
app.listen(port ,()=>{
  console.log('el servidor corre en el puerto' + port);
});
