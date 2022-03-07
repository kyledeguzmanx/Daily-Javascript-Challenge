var express = require('express');
var app = express();

app.get("/", (request, response)=>{
  response.sendFile(__dirname + "/views/index.html");
})

app.get("/json", (request, response) => {
    if(process.env['MESSAGE_STYLE'] === "uppercase")
      response.json({"message" : "HELLO JSON"})
    else{
      response.json({"message" : "Hello json"})
    }
})
