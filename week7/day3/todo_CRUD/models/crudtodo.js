'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CRUDtodo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CRUDtodo.init({
    LISTtodo: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'CRUDtodo',
  });
  return CRUDtodo;
};