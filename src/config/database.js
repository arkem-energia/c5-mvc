
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('c5mvc', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  });
//prueba si la conexion es correcta, es ´promesa simple
//la promesa espera la rpta de la bd  
//espera, se anida

function pruebaConexion() {
    sequelize.authenticate().then(res => {
            console.log('Conexion Correcta con la BD.');
    }).catch(error => {
        console.log('Error de Conexion:', error);
    });       
}

  //asinc await,se debe usar esto
//aqui avanza directamente
async function pruebaConexion2() {
    try {
        await sequelize.authenticate();
        console.log('Conexion Correcta con la BD.');
      } catch (error) {
        console.log('Error de Conexion:', error);
      }
}

pruebaConexion();
pruebaConexion2();

module.exports = sequelize; //exportamos la conexion con sequelize