const {Sequelize, DataTypes} = require('sequelize');

module.exports = (Sequelize, DataTypes) => {
    const Constructor = sequilize.define('Constructor', {
        constructorId:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true,
            autoIncrement:true,
        },

        constructorRef:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        nationallity:{
            type: DataTypes.STRING,
            allowNull:true,
        },
        url:{
            type:DataTypes.STRING,
            allowNull:false,
        }


    })
    return Constructor
}