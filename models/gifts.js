module.exports = function(sequelize, DataTypes) {
  var Treegifts = sequelize.define("Treegifts", {
    routeName: {
      type: DataTypes.String
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 150]
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 150]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1, 150]
      }
    },
    condition: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 150]
      }
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  });
  return Treegifts;
};