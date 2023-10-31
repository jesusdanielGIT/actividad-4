var productosModel = {}
var productos = [
    {codigo:1,nombre:"jabon", descripcion:"producto alta calidad", precio:5000},
    {codigo:2,nombre:"platos", descripcion:"producto alta calidad", precio:3000},
    {codigo:3,nombre:"almohada", descripcion:"producto alta calidad", precio:2000},
    {codigo:4,nombre:"mascarila", descripcion:"producto alta calidad", precio:1500},
    {codigo:5,nombre:"tapete", descripcion:"producto alta calidad", precio:4000},
]

productosModel.Guardar = function(post,callback){

productos.push({codigo:post.codigo,nombre:post.nombre,descripcion:post.descripcion, precio:post.precio})
    
    return callback({state:true , mensaje:"se almaceno el producto correctamente"})
}
productosModel.listar = function(post,callback){
return callback(productos)
}
productosModel.modificar = function(post,callback){

    var posicion = productos.findIndex((item) => item.codigo == post.codigo)
if(posicion == -1){
    callback({state:false, mensaje:"esta identificacion no se encuentra en la base de datos"})
    return false
}
else{
    productos[posicion].descripcion = post.descripcion
    productos[posicion].nombre = post.nombre
    productos[posicion].precio = post.precio
    callback({state:true, mensaje:"se actualizo el registro"})

}
}
productosModel.eliminar = function(post, callback){
    var posicion = productos.findIndex((item) => item.codigo == post.codigo)
    if(posicion == -1){
        response.json({state:false, mensaje:"este codigo no existe, no se puede eliminar"})
        
    }
    else{
        productos.splice(posicion, 1)
        callback({state: true, mensaje:"se elimino correctamente"})
    }
}
productosModel.listarPorCodigo = function(post, callback){
    var posicion = productos.findIndex((item) => item.codigo == post.codigo)
    return callback(productos[posicion])
}
module.exports.productosModel = productosModel