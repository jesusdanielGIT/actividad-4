var express = require("express")
global.app = express()
var puerto = 3000;
var bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
require("./routes.js")

//modelo:base de datos vista:front end controlador:requisitos
// para get se usa .params y para post .body
//create

//read

//update

//delete

app.listen(puerto, function(){

console.log("servidor funcionando por el puerto " + puerto)

})