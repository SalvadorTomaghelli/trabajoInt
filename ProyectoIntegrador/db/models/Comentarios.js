module.exports = function(sequelize,dataTypes){
    let alias = 'Comentarios';
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true, 
            autoIncrement: true 
        },
        id_usuario:{
            type: dataTypes.INTEGER
        },
        id_producto:{
            type: dataTypes.INTEGER
        },
        texto:{
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
        tablename: "Comentarios",
        timestamps: true,
        underscored: true
    }
    const Comentarios= sequelize.define(alias,cols,config);

    Comentarios.associate = function(models){
        Comentarios.belongsTo(models.Usuarios,{
            as: 'comentarios',
            foreignKey: "id_usuario",
        }),
       Comentarios.belongsTo(models.Productos,{
            as: 'Comentarios',
            foreignKey: 'id_producto',
            })
    }
    
    return Comentarios
    
}

