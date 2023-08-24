require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const Favoritemodel = require("./models/favorite")
const userModel = require("./models/user")

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
   // URL
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
   { logging: false, native: false }
);

async function testConnection(){
   try {
      await sequelize.authenticate()
      console.log("Se conecto con exito")
   } catch (error) {
      console.log("no se conecto")
   }
}

testConnection()

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
Favoritemodel(sequelize)
userModel(sequelize)
//

//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
 const { User, Favorite } = sequelize.models;
 User.belongsToMany(Favorite, {through:"user_favorites"})
 Favorite.belongsToMany(User, {through:"user_favorites"})
module.exports = {
   User,
   Favorite,
   conn: sequelize,
};
