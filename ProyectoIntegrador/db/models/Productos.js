module.exports = function(sequelize,database){
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
    

    return Productos
}

