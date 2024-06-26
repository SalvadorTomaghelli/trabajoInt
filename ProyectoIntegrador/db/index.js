let usuarios= [{ 
        email:"usuario1@gmail.com",
        usuario:"usuario1",
        contrasenia:"usuario1",
        fecha_de_nacimiento:" 08/06/2005",
        numero_de_documento:"45873299",
        foto_de_perfil: "/public/users/usuario1.jpg ",
        comentarios:"Excelente auto! Me encanto el disenio!"
    },
    { 
        email:"usuario2@gmail.com",
        usuario:"usuario2",
        contrasenia:"usuario2",
        fecha_de_nacimiento:" 09/06/2005",
        numero_de_documento:"44873299",
        foto_de_perfil: "/public/users/usuario1.jpg ",
        comentarios:"Me parecio muy elevado el precio. Igualmente muy lindo auto."
    },
    { 
        email:"usuario3@gmail.com",
        usuario:"usuario3",
        contrasenia:"usuario2",
        fecha_de_nacimiento:" 10/06/2005",
        numero_de_documento:"43873299",
        foto_de_perfil: "/public/users/usuario1.jpg ",
        comentarios:"Gran auto y muy buen motor."
    },
    { 
        email:"usuario4@gmail.com",
        usuario:"usuario4",
        contrasenia:"usuario4",
        fecha_de_nacimiento:" 11/06/2005",
        numero_de_documento:"42873299",
        foto_de_perfil: "/public/users/usuario1.jpg ",
        comentarios:"Esta disponible el color blanco?"
    },
    { 
        email:"usuario5@gmail.com",
        usuario:"usuario5",
        contrasenia:"usuario5",
        fecha_de_nacimiento:" 12/06/2005",
        numero_de_documento:"41873299",
        foto_de_perfil: "/public/users/usuario1.jpg ",
        comentarios:"Se puede aplicar mejoras al motor?"
    }

]
//foto descripcion nombre comentarios
let productos= [{
    nombre: "Ferrari",
    descripcion: "Ferrari 428 Italia, destacado por su aceleracion.",
    imagenProducto:'/public/images/products/auto1.jpg',
    comentarios: {
        nombreUsuario: ["Usuario1:" , "Usuario2:" , "Usuario3:" , "Usuario4:" , "Usuario5:"] , 
        textoComentario: ["Excelente auto! Me encanto el disenio!", "Me parecio muy elevado el precio. Igualmente muy lindo auto.", "Gran auto y muy buen motor.", "Esta disponible el color blanco?" , "Se puede aplicar mejoras al motor?" ] ,
        imagenPerfil: '/public/users/usuario1.jpg'
    }

},{
    nombre: "Lamborghini",
    descripcion:"Lamborghini Gallardo, un clasico a traves de los años", 
    imagenProducto:"/public/images/products/auto2.jpeg",
    comentarios: {
        nombreUsuario: ["Usuario1:" , "Usuario2:" , "Usuario3:" , "Usuario4:" , "Usuario5:"] , 
        textoComentario: ["Excelente auto! Me encanto el disenio!", "Me parecio muy elevado el precio. Igualmente muy lindo auto.", "Gran auto y muy buen motor.", "Esta disponible el color blanco?" , "Se puede aplicar mejoras al motor?" ] ,
        imagenPerfil: '/public/users/usuario1.jpg'
    }
},{
    nombre: "Pagani",
    descripcion:"Pagani Huraya, elegante como una gazela.", 
    imagenProducto:"/public/images/products/auto3.jpg",
    comentarios: {
        nombreUsuario: ["Usuario1:" , "Usuario2:" , "Usuario3:" , "Usuario4:" , "Usuario5:"] , 
        textoComentario: ["Excelente auto! Me encanto el disenio!", "Me parecio muy elevado el precio. Igualmente muy lindo auto.", "Gran auto y muy buen motor.", "Esta disponible el color blanco?" , "Se puede aplicar mejoras al motor?" ] ,
        imagenPerfil: '/public/users/usuario1.jpg'
    }
},{
    nombre: "Porsche",
    descripcion:"Porsche 930, un auto para gente con buen gusto.", 
    imagenProducto:"/public/images/products/auto4.jpeg",
    comentarios: {
        nombreUsuario: ["Usuario1:" , "Usuario2:" , "Usuario3:" , "Usuario4:" , "Usuario5:"] , 
        textoComentario: ["Excelente auto! Me encanto el disenio!", "Me parecio muy elevado el precio. Igualmente muy lindo auto.", "Gran auto y muy buen motor.", "Esta disponible el color blanco?" , "Se puede aplicar mejoras al motor?" ] ,
        imagenPerfil: '/public/users/usuario1.jpg'
    }
},{
    nombre: "BMW",
    descripcion:"BMW M2, no es un auto, mas bien una experiencia.", 
    imagenProducto:"/public/images/products/auto5.jpg",
    comentarios: {
        nombreUsuario: ["Usuario1:" , "Usuario2:" , "Usuario3:" , "Usuario4:" , "Usuario5:"] , 
        textoComentario: ["Excelente auto! Me encanto el disenio!", "Me parecio muy elevado el precio. Igualmente muy lindo auto.", "Gran auto y muy buen motor.", "Esta disponible el color blanco?" , "Se puede aplicar mejoras al motor?" ] ,
        imagenPerfil: '/public/users/usuario1.jpg'
    }
},{
    nombre: "Pontiac",
    descripcion:"Pontiac GTO, un auto para los de la vieja escuela.", 
    imagenProducto:"/public/images/products/auto6.jpg",
    comentarios: {
        nombreUsuario: ["Usuario1:" , "Usuario2:" , "Usuario3:" , "Usuario4:" , "Usuario5:"] , 
        textoComentario: ["Excelente auto! Me encanto el disenio!", "Me parecio muy elevado el precio. Igualmente muy lindo auto.", "Gran auto y muy buen motor.", "Esta disponible el color blanco?" , "Se puede aplicar mejoras al motor?" ] ,
        imagenPerfil: '/public/users/usuario1.jpg'
    }
},{
    nombre: "Alfa Romeo",
    descripcion:"Alfa Romeo GTA, su lujoso interior es tope de gamma.", 
    imagenProducto:"/public/images/products/auto7.jpeg",
    comentarios: {
        nombreUsuario: ["Usuario1:" , "Usuario2:" , "Usuario3:" , "Usuario4:" , "Usuario5:"] , 
        textoComentario: ["Excelente auto! Me encanto el disenio!", "Me parecio muy elevado el precio. Igualmente muy lindo auto.", "Gran auto y muy buen motor.", "Esta disponible el color blanco?" , "Se puede aplicar mejoras al motor?" ] ,
        imagenPerfil: '/public/users/usuario1.jpg'
    }
},{
    nombre: "Nissan",
    descripcion:"Nissan 370Z, para ganar en todas las carreras.", 
    imagenProducto:"/public/images/products/auto8.jpeg",
    comentarios: {
        nombreUsuario: ["Usuario1:" , "Usuario2:" , "Usuario3:" , "Usuario4:" , "Usuario5:"] , 
        textoComentario: ["Excelente auto! Me encanto el disenio!", "Me parecio muy elevado el precio. Igualmente muy lindo auto.", "Gran auto y muy buen motor.", "Esta disponible el color blanco?" , "Se puede aplicar mejoras al motor?" ] ,
        imagenPerfil: '/public/users/usuario1.jpg'
    }
}
]
module.exports= usuarios