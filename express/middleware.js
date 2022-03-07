var express = require('express');
var app = express();

//const welcome= "Hello World"
//console.log(welcome)

//evaluates all request, middleware, must pop up before relevant request
app.use((request, response, next) => {
  console.log(request.method + " " + request.path + " - " + request.ip );
  next();
})
