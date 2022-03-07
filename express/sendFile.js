var express = require('express');
var app = express();

app.get("/", (request, response)=>{
  response.sendFile(__dirname + "/views/index.html");
})
