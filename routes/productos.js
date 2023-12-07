const {Router} = require('express')

const route = Router()

//Listar todos los datos
const {getProducto, postProducto, putProducto} = require('../controllers/producto') //Importando el controlador

route.get('/', getProducto)

route.post('/', postProducto)

route.put('/', putProducto)


module.exports = route