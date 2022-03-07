//sample URL: /name?first=firstname&last=lastname
app.get("/name",(request, response) => {
  var firstName= request.query.first; 
  var lastName = request.query.last;
  response.json({
    name: `${firstName} ${lastName}`
  })
})
