module.exports = function(sequelize, DataTypes) {
  var ManifestoItemsDetail = sequelize.define(
    "ManifestoItemsDetail",
    {
      itemNumber: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      itemUrl: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      itemImage: {
        type: DataTypes.STRING(500),
        allowNull: false
      }
    },
    {
      tableName: "ManifestoItemsDetail"
    }
  );
  ManifestoItemsDetail.associate = function(models) {
    models.ManifestoItemsDetail.belongsTo(models.ManifestoItemsHeader, {
      foreignKey: "itemNumber",
      targetKey: "itemNumber"
    });
  };

  return ManifestoItemsDetail;
};
