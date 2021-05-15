//aqui creamos modelos,ayudan a migrar la bd y ayuda a hacer consultas
const seq = require("./../config/database");
const { Sequelize, DataTypes } = require('sequelize');

const usuario = seq.define('Usuario', {
    //atributos
    correo: DataTypes.STRING,
    clave: DataTypes.STRING

},{//crea 2 campos update,para hacer auditoria
  timestamps: true  
});
//crear tabla,migrar,solo migrar la 1era vez,si lo hacemos cada vez se eliminaran datos
usuario.sync()
//exporto usuario
module.exports=usuario