module.exports = function(sequelize,dataTypes){
    let alias = 'Productos'
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true, 
            autoIncrement: true
        },
        id_usuario:{
            type: dataTypes.INTEGER
        },
        nombre_foto:{
            type: dataTypes.STRING
        },
        nombre_producto:{
            type: dataTypes.STRING
        },
        descripcion:{
            type: dataTypes.STRING
        },
        createdAt:{
            type: dataTypes.DATE,
            allowNull:true
        },
        updatedAt:{
            type: dataTypes.DATE,
            allowNull: true
        },
        deletedAt:{
            type: dataTypes.DATE,
            allowNull: true
        }

    }
    let config={
        tablename: "Productos",
        timestamps: true,
        underscored: false
    }
    const Productos= sequelize.define(alias,cols,config);
    Productos.associate=function(models){
        Productos.hasMany(models.Comentarios, {
            as:'productos',
            foreignKey:"id_productos"
        }),
        Productos.belongsTo(models.Usuarios,{
            as:'Productos',
            foreignKey:"id_producto"
        })
        
    }

    return Productos
}

