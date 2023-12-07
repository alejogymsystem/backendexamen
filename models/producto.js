const {Schema, model } = require('mongoose')

const ProductoSchema = ({
    nombreProducto:{
        type: String,
        unique:true,
        required:[true, 'El nombre de usuario es requirido']
    },

    precioProducto:{
        type: Number,
        required:[true, 'El Precio producto es requirido']
    },

    ivaProducto: {
        type:Number,
        required:[true, 'El Iva producto es requirido']
    },

    Existencias: {
        type:Number,
        required:[true, 'las existencias producto son requiridas']
    },
    preciodolar: {
        type:Number,
        required:[true, 'el precio dolar es requerido']
    }
})
    
module.exports = model('Producto', ProductoSchema)
