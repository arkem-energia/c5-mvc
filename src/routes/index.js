const usuarioCon = require("./../controllers/usuarioController")

/**
 * Declaración de Rutas (urls)
 * @param {*} app (Express)
 */
function urls(app){
    app.get("/usuario", usuarioCon.lista);
    app.get("/usuario/nuevo", usuarioCon.crear);
    app.post("/usuario", usuarioCon.guardar);
    app.get("/usuario/:id", usuarioCon.mostrar);
    app.get("/usuario/:id/editar", usuarioCon.editar);
    app.post("/usuario/:id", usuarioCon.modificar);
    app.post("/usuario/:id", usuarioCon.eliminar);

}

module.exports = urls
