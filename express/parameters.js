app.get("/:word/echo", (request, response) => {
      response.json({
        echo: request.params.word
      })
});
    
