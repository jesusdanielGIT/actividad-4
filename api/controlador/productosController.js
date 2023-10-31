var productosModel = require("../modelos/productosModel.js").productosModel
var productosController = {}
productosController.Guardar = function(request,response){

    try {
        var post = {
        codigo:request.body.codigo,
        nombre:request.body.nombre,
        descripcion:request.body.descripcion,
        precio:request.body.precio
        }
        
    if(post.codigo == undefined || post.codigo == null || post.codigo == ""){

        response.json({state:false, mensaje:"el campo codigo es obligatorio"})
        return false
    }
    if(post.nombre == undefined || post.nombre == null || post.nombre == ""){

        response.json({state:false, mensaje:"el campo nombre es obligatorio"})
        return false
    }
    
    if(post.descripcion == undefined || post.descripcion == null || post.descripcion == ""){

        response.json({state:false, mensaje:"el campo descripcion es obligatorio"})
        return false
    }
    if(post.precio == undefined || post.precio == null || post.precio == ""){

        response.json({state:false, mensaje:"el campo precio es obligatorio"})
        return false
    }
    
    productosModel.Guardar(post,function(respuesta){
     response.json(respuesta)
    })
    } catch (error) {
        response.json({state:false, mensaje:"error inesperado", error:error})
    }



}
productosController.listar = function(request,response){

    productosModel.listar(null, function(respuesta){

        response.json(respuesta)
    })
}
productosController.modificar = function(request,response){
    var post = {
        codigo:request.body.codigo,
        nombre:request.body.nombre,
        descripcion:request.body.descripcion,
        precio:request.body.precio
    }
    

if(post.codigo == undefined || post.codigo == null || post.codigo == ""){

    response.json({state:false, mensaje:"el campo codigo es obligatorio"})
    return false
}
if(post.nombre == undefined || post.nombre == null || post.nombre == ""){

    response.json({state:false, mensaje:"el campo nombre es obligatorio"})
    return false
}

if(post.descripcion == undefined || post.descripcion == null || post.descripcion == ""){

    response.json({state:false, mensaje:"el campo descripcion es obligatorio"})
    return false
}
if(post.precio == undefined || post.precio == null || post.precio == ""){

    response.json({state:false, mensaje:"el campo precio es obligatorio"})
    return false
}
productosModel.modificar(post,function(respuesta){

  response.json(respuesta)  
})


}
productosController.eliminar = function(request,response){
    var post = {
        codigo:request.body.codigo
    }
    
    if(post.codigo == undefined || post.codigo == null || post.codigo == ""){

        response.json({state:false, mensaje:"el campo codigo es obligatorio"})
        return false
    }
    productosModel.eliminar(post, function(respuesta){

        response.json(respuesta)
    })
}
productosController.listarPorCodigo = function(request,response){
    var post = {
        codigo:request.body.codigo
    }
    if(post.codigo == undefined || post.codigo == null || post.codigo == ""){
        response.json({state:false, mensaje:"el campo codigo es obligatorio"})
        return false
    }
    productosModel.listarPorCodigo(post, function(respuesta){
        response.json (respuesta)
    })
}
module.exports.productosController = productosController