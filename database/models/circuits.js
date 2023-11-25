const {Sequelize, DataTypes} = require('sequelize')

module.exports = (sequelize, DataTypes) =>{
    const Circuit = sequelize.define('Circuit', {
        circuitId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        circuitRef: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        location: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        country: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        lat: {
          type: DataTypes.FLOAT,
          allowNull: true,
        },
        lng: {
          type: DataTypes.FLOAT,
          allowNull: true,
        },
        alt: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        url: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
      }) 

      return Circuit
}