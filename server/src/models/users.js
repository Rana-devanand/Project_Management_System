"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init(
    {
      Name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      Email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      Password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Role: {
        type: DataTypes.STRING,
        allowNull: false,
        // validate: {
        //   isIn: [['admin', 'user']],
        // },
      },
    },
    {
      sequelize,
      modelName: "Users",
    }
  );

  Users.beforeCreate(async  (user) => {
    user.Password = await bcrypt.hash(user.Password, 10);
    return user;
  })

  return Users;
};
