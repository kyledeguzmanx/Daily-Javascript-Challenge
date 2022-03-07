app.get("/now",
  (request, response, next)=>{
    request.time = new Date().toString();
    next();
  }, 
  (request, response)=>{
    response.json({
       time: request.time
    })
    console.log({time: request.time})
  });
