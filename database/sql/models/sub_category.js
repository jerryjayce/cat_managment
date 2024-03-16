'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sub_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sub_category.init({
    category_id: DataTypes.STRING,
    subcategory_id: DataTypes.STRING,
    subcategory_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'sub_category',
  });
  return sub_category;
};
