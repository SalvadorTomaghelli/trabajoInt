module.exports= function(sequelize,database){
    let alias='Usuarios';
    let cols={
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true, 
            autoIncrement: true
        },
        email:{
            type: dataTypes.STRING
        },
        contrasenia:{
            type: dataTypes.STRING
        },
        DNI:{
            type:dataTypes.INTEGER
        },
        fecha:{
            type:dataTypes.DATE
        },
        foto_perfil:{
            type:DataTypes.STRING
        },
        created_at : {
            type: dataTypes.DATE,
            allowNull:true,
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        delete_at:{
            type: dataTypes.DATE,
            allowNull: true,
        }

    }
    let config={
        tablename: "Usuarios",
        timestamps: false,
        underscored: true
    }
    const Usuarios= sequelize.define(alias,cols,config);
    Usuarios.associate=function(models){
        Usuarios.hasMany(models.Comentarios, {
            as:'Comentarios',
            foreignKey:"id_usuario"
        }),
        Usuarios.hasMany(models.Productos,{
            as:'Productos',
            foreignKey:"id_usuario"
        })
        
        
        
    }

    return Usuarios
    
}

//comentarios con productos 