module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nickname: {
            type: DataTypes.STRING,
            unique: true
        },
        nombre: {
            type: DataTypes.STRING
        },
        apellido: {
            type: DataTypes.STRING
        },
        domicilio: {
            type: DataTypes.STRING
        },
        fechaNacimiento: {
            type: DataTypes.DATE
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            },
            unique: true
        },
        sexo: {
            type: DataTypes.ENUM('M', 'F')
        },
        dni: {
            type: DataTypes.STRING,
            unique: true
        },
        partido: {
            type: DataTypes.STRING
        },
        ciudad: {
            type: DataTypes.STRING
        },
        cp: {
            type: DataTypes.STRING
        },
        telefonoFijo: {
            type: DataTypes.STRING
        },
        telefonoMovil: {
            type: DataTypes.STRING
        },
        contraseña: {
            type: DataTypes.STRING
        }
    }, {
        underscored: true,
        //defaultScope: {
        //    include: [{model: Job}]
        //}
    });
    
    //User.belongsTo(Job);
    
    return User;
}