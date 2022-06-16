const { DataTypes, Op } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value){
        this.setDataValue('name', value.toLowerCase()) 
    }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    released: {
      type: DataTypes.STRING, // Validar porque en la API lo muestra como Sring
      
    },
    rating: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    }, 
    background_image: {
      type: DataTypes.TEXT,
      defaultValue: 'https://i1.sndcdn.com/avatars-rdzlKhnEALWDHlBy-cB4kyA-t500x500.jpg', // cambiar imagen
      allowNull: true,
    },
  },
  {
    timestamps: false,
  });
};


// [ ] Videojuego con las siguientes propiedades:
// ID: * No puede ser un ID de un videojuego ya existente en la API rawg  -->Done
// Nombre *                                                               -->Done
// Descripción *                                                          -->Done      
// Fecha de lanzamiento                                                   -->Done
// Rating                                                                 -->Done
// Plataformas *                                                          -->Done

