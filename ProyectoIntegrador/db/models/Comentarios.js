module.exports = function(sequelize,database){
    let alias = 'Comentarios';
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true, 
            autoIncrement: true 
        },
        id_usuario:{
            type: DataTypes.INTEGER
        },
        id_producto:{
            type: DataTypes.INTEGER
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
            as: 'comentario',
            foreignKey: "id_usuario",
        }),
       Comentarios.belongsTo(models.Productos,{
            as: 'comentario',
            foreignKey: 'id_producto',
            })
    }
    
    return Comentarios
    
}

