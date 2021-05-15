//const usuario=require("./../models/usuario");
//const producto=require("./../models/producto");
//usuario.sync;
//producto.sync;
//solo lo comente por probar el index de carpeta models
const {categoria,producto }=require("./../models/index");
categoria.sync();
producto.sync();
/**
 * Lista de Usuarios
 * @param {*} req datos de Cliente
 * @param {*} res respuesta del servidor
 */
function lista(req, res) {
    // renderizar una View   
    res.render("usuario/lista");
}

function crear(req, res) {
    // renderizar una View 
    res.render("usuario/nuevo");   
}

function guardar(req, res) {
    // guardar en la BD    
}

function mostrar(req, res) {
    // renderizar una View  
    res.render("usuario/mostrar");  
}

function editar(req, res) {
    // renderizar una View  
    res.render("usuario/editar");  
}

function modificar(req, res) {
    // modificar datos  
}

function eliminar(req, res) {
    // retornar una respuesta 
}

module.exports = {
    lista,
    mostrar,
    crear,
    guardar,
    editar,
    modificar,
    eliminar
}