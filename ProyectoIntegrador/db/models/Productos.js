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
        created_at:{
            type: dataTypes.DATE,
            allowNull:true
        },
        updated_at:{
            type: dataTypes.DATE,
            allowNull: true
        },
        deleted_at:{
            type: dataTypes.DATE,
            allowNull: true
        }

    }
    let config={
        tablename: "Productos",
        timestamps: true,
        underscored: true
    }
    const Productos= sequelize.define(alias,cols,config);
    Productos.associate=function(models){
        Productos.hasMany(models.Comentarios, {
            as:'Comentarios',
            foreignKey:"id_producto"
        }),
        Productos.belongsTo(models.Usuarios,{
            as:'Usuarios',
            foreignKey:"id_usuario"
        })
        
    }

    return Productos
}

