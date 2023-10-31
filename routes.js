var productosController = require("./api/controlador/productosController").productosController
app.post("/productos/Guardar",function(request,response){
productosController.Guardar(request,response)
    
})

app.post("/productos/listar",function(request,response){

   productosController.listar(request,response)
})

app.post("/productos/modificar",function(request,response){
productosController.modificar(request,response)
})

app.post("/productos/eliminar", function(request,response){
   productosController.eliminar(request,response)
})
app.post("/productos/listarPorCodigo", function(request,response){

   productosController.listarPorCodigo(request,response)
})