module.exports = function(sequelize, DataTypes) {
  var ManifestoItemsHeader = sequelize.define(
    "ManifestoItemsHeader",
    {
      itemNumber: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      title: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      description: {
        type: DataTypes.STRING(500),
        allowNull: false
      },
      department: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      status: {
        type: DataTypes.STRING(25),
        allowNull: false
      },
      thirtyFivePointProgram: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    },
    {
      indexes: [
        {
          unique: true,
          fields: ["itemNumber"]
        }
      ]
    },
    {
      tableName: "ManifestoItemsHeader"
    }
  );

  return ManifestoItemsHeader;
};
