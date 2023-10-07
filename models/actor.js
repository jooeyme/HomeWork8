    
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Actor extends Model {}
    Actor.init({
    actor_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    first_name: {
        type: DataTypes.STRING,
    },
    last_name: {
        type: DataTypes.STRING,
    },
    last_update: {
        type: DataTypes.DATE,
    },
    age: {
        type: DataTypes.INTEGER,
    },
    }, {
    sequelize,
    modelName: 'Actor',
    tableName: 'actor',
    });
    return Actor;
    }

