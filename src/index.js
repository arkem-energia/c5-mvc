const express = require("express");
let ejs = require('ejs');
// import modulos locales
const rutas = require("./routes/index");

const app = express();

// rutas
rutas(app);

// habilitar vistas
app.set('views', './src/views');
app.set('view engine','ejs');

/*
app.get("/", function(req, res){
    res.render("index");
});*/

const PORT = process.env.PORT || 3000

app.listen(PORT, function(){
    console.log(`Servidor Levantado en http://127.0.0.1:${PORT}`)
});