const { model } = require('mongoose')
const {Sequelize, DataTypes} = require('sequelize')

model.exports = (sequelize, DataTypes) => {
    const Driver = sequelize.define('Driver', {
        driverId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrimement: true,
        },
        driverRef:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true,
        },
        number:{
            type:DataTypes.INTEGER,
            allowNull:true,
        },
        code:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        forename:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          dob: {
            type: DataTypes.DATE,
            allowNull: true,
          },
          nationality: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          url: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
          },
    })

    return Driver
}