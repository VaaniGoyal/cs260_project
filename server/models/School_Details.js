const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const School_Details = sequelize.define('School_Details', {

  school_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  class: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  school: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cgpa: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  division: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: false // Exclude createdAt and updatedAt columns
});

module.exports = School_Details;