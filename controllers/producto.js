const {response} = require('express')

const Producto = require('../models/producto')

const getProducto = async(req, res) => {

    const productos = await Producto.find(); //Obtener todos los documentos de una colección
    res.json({
        msg: productos
    })
}

const postProducto = async(req, res) => {
    const datos = req.body //Capturar datos de la url-postman
    let mensaje = 'Inserción exitosa'
    try {
        const producto = new Producto(datos) //Instanciar el objeto
        await producto.save() //Guardar en la base de dato
        console.log(producto)
    } catch (error) {
        mensaje = error
        console.log(error)
    }
    res.json({
        msg: mensaje
    })
}

const putProducto = async(req, res) => {
    const { nombreProducto, precioProducto, ivaProducto, Existencias,preciodolar } = req.body //Desesctructurar
    let mensaje = ''
    try {
        const producto = await Producto.findOneAndUpdate({nombreProducto: nombreProducto},
        {precioProducto:precioProducto, ivaProducto:ivaProducto, Existencias:Existencias,preciodolar:preciodolar})
        mensaje = 'Actualización exitosa'
    } catch (error) {
        mensaje = error
    }   
    res.json({
        msg:mensaje
    })
}




module.exports = {
    getProducto,
    postProducto,
    putProducto
}

