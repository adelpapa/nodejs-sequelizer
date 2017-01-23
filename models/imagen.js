module.exports = function(sequelize, DataTypes) {
    var Imagen = sequelize.define('imagen', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING
        },
        descripcion: {
            type: DataTypes.STRING
        },
        url: {
            type: DataTypes.STRING,
            isUrl: true
        }
    });
    
    return Imagen;
}