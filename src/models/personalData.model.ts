const { DataTypes } = require("sequelize");
export const PersonalData = (sequelize) =>
  sequelize.define(
    "PersonalInfo",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      f_name: {
        type: DataTypes.STRING,
      },
      l_name: {
        type: DataTypes.STRING,
      },
      mobile_no: {
        type: DataTypes.INTEGER,
      },
      d_o_b: {
        type: DataTypes.DATEONLY,
      },
      age: {
        type: DataTypes.FLOAT,
      },
      weight: {
        type: DataTypes.FLOAT,
      },
      height: {
        type: DataTypes.FLOAT,
      },
      BMI: {
        type: DataTypes.FLOAT,
      },
      contry: {
        type: DataTypes.STRING,
      },
      diabitic: {
        type: DataTypes.BOOLEAN,
      },
      cardiac: {
        type: DataTypes.BOOLEAN,
      },
      blood_pressure: {
        type: DataTypes.BOOLEAN,
      },
      UserId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "PersonalInfo",
      timestamps: false,
    }
  );
