const express = require('express');
const app = express();

app.get('/', (req,res) =>{
  res.send("Hello World! This is my app :D");
});

app.listen(3000,function(){
  console.log("App listening on port 3000");
});
