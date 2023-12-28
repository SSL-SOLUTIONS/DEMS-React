const { DataTypes, Model } = require("sequelize");
const sequelize = require("../Config/dbConfig");

class Contact extends Model {}

Contact.init(
  {
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    service: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    budget: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Contact",
  }
);

module.exports = Contact;
