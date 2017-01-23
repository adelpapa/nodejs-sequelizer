module.exports = function(sequelize, DataTypes) {
  return sequelize.define('job', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        }
    });
}