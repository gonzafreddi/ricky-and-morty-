const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id:{
         type: DataTypes.UUID,// tipo de dato exadecimal
         primaryKey:true,
         allowNuul:false,
         defaultValue: DataTypes.UUIDV4 //genero hexadecimal
      },
      email:{
       type: DataTypes.STRING,
       isEmail:true,
       allowNuul:false,
       Unique:true
      },
      password:{
      type: DataTypes.STRING,
      allowNuul:false
      },
   }, { timestamps: false });
};
