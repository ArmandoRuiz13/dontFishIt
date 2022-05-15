const FizzInfoController = require("./controllers/FizzInfoController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzInfo Api welcome!"});
});
app.get("/fizzinfo",(request,response) =>{
    return response.json(FizzInfoController.getAllInfo())
});
app.get("/fizzinfo/names",(request,response) =>{
    return response.json(FizzInfoController.getAllNames())
});

app.get("/fizzinfo/:id",(request,response) =>{
    const id = request.params.id;
    const especie = FizzInfoController.getFizzByID(id); 
    response.json(especie);
});

app.listen(port, () => {
    console.log(`FizzInfo API in localhost:${port}`);
});