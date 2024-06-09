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

    }
    let config={
        tablename: "Usuarios",
        timestamps: false,
        underscored: true
    }
    const Usuarios= sequelize.define(alias,cols,config);

    return Usuarios
    
}