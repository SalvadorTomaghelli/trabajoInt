CREATE SCHEMA proyectoIntegrador_db;
USE proyectoIntegrador_db;

CREATE TABLE Usuarios(

id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(100) NOT NULL,
contrasenia VARCHAR(100) NOT NULL,
fecha DATE NULL,
dni INT UNIQUE NOT NULL,
foto_perfil VARCHAR(100) NOT NULL,
createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- foreign key
);

CREATE TABLE Productos(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
id_usuario INT UNSIGNED,
nombre_foto VARCHAR(100) NOT NULL,
nombre_producto  VARCHAR(100) NOT NULL,
descripcion  VARCHAR(250) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt  TIMESTAMP DEFAULT  CURRENT_TIMESTAMP,
-- foreign keys
FOREIGN KEY (id_usuario) REFERENCES Usuarios(id)
);

CREATE TABLE Comentarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
id_producto INT UNSIGNED,
id_usuario INT UNSIGNED,
texto VARCHAR(100) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt  TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
-- foreign key
FOREIGN KEY (id_usuario) REFERENCES Usuarios(id),
FOREIGN KEY (id_producto) REFERENCES Productos(id)
);

-- Data Usuarios

INSERT INTO Usuarios
VALUES (DEFAULT, 'usuario1@gmail.com','usuario1','08/06/2005','45873299','usuario1.jpg', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO Usuarios
VALUES (DEFAULT, 'usuario2@gmail.com','usuario2','09/06/2005','44873299','usuario2.jpg', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO Usuarios
VALUES (DEFAULT, 'usuario3@gmail.com','usuario3','10/06/2005','43873299','usuario3.jpg', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO Usuarios
VALUES (DEFAULT, 'usuario4@gmail.com','usuario4','11/06/2005','42873299','usuario4.jpg', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO Usuarios
VALUES (DEFAULT, 'usuario5@gmail.com','usuario5','12/06/2005','41873299','usuario5.jpg', DEFAULT, DEFAULT, DEFAULT);


-- data Productos

INSERT INTO Productos
VALUES (DEFAULT, 1, 'auto1.jpg' ,'Ferrari', "Ferrari 428 Italia, destacado por su aceleracion", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO Productos
VALUES (DEFAULT, 1, 'auto2.jpeg' ,'Lamborghini', "Lamborghini Gallardo, un clasico a traves de los años", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO Productos
VALUES(DEFAULT, 2,'auto3.jpg','Pagani','Pagani Huraya, elegante como una gazela.',DEFAULT,DEFAULT,DEFAULT);

INSERT INTO Productos
VALUES (DEFAULT, 2, 'auto4.jpeg' ,'Porsche', "Porsche 930, un auto para gente con buen gusto.", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO Productos
VALUES(DEFAULT, 3,'auto5.jpg','BMW','BMW M2, no es un auto, mas bien una experiencia.',DEFAULT,DEFAULT,DEFAULT);

INSERT INTO Productos
VALUES (DEFAULT, 3, 'auto6.jpg' ,'Pontiac', "Pontiac GTO, un auto para los de la vieja escuela.", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO Productos
VALUES(DEFAULT,4,'auto7.jpeg','Alfa Romeo','Alfa Romeo GTA, su lujoso interior es tope de gamma.',DEFAULT,DEFAULT,DEFAULT);

INSERT INTO Productos
VALUES(DEFAULT ,4 ,'auto8.jpeg','Nissan','Nissan 370Z, para ganar en todas las carreras.',DEFAULT,DEFAULT,DEFAULT);

INSERT INTO Productos
VALUES(DEFAULT,5,'auto9.jpg','Chevrolet','El Chevrolet Corvette es un automóvil deportivo creado en 1953.',DEFAULT,DEFAULT,DEFAULT);

INSERT INTO Productos
VALUES(DEFAULT,5,'auto10.jpg','Maserati','Maserati es un fabricante italiano de automóviles de lujo fundado en 1914.',DEFAULT,DEFAULT,DEFAULT);



-- Data Comentarios

INSERT INTO Comentarios
VALUES (DEFAULT, 1, 1,'Muy Bueno', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO Comentarios
VALUES (DEFAULT, 1, 4,'¿En que colores está disponible?', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO Comentarios
VALUES (DEFAULT, 1, 2,'Me Encanta!', DEFAULT, DEFAULT, DEFAULT);

-- ---------------------------

INSERT INTO Comentarios
VALUES(DEFAULT,2,1,"De que anio es?",DEFAULT,DEFAULT,DEFAULT); 

INSERT INTO Comentarios
VALUES(DEFAULT,2,2,"Colores disponibles?",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO Comentarios
VALUES(DEFAULT,2,4,"Cuantos caballos de fuerza tiene?",DEFAULT,DEFAULT,DEFAULT);

-- ---------------------------

INSERT INTO Comentarios
VALUES(DEFAULT, 3, 2, "No alquilen! Pague y no me dieron el auto.", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO Comentarios
VALUES(DEFAULT, 3, 5, "Muy bueno.", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO Comentarios
VALUES(DEFAULT, 3, 3, "Cuanto cuesta?", DEFAULT, DEFAULT, DEFAULT);

-- --------------------------

INSERT INTO Comentarios
VALUES(DEFAULT, 4, 3, "Este auto es muy dificil de manejar, no me gusto.", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO Comentarios
VALUES(DEFAULT, 4, 1, "Es un precio muy elevado para este auto.", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO Comentarios
VALUES(DEFAULT, 4, 2, "Malisima calidad, por adentro estaba todo sucio.", DEFAULT, DEFAULT, DEFAULT);

-- -------------------------

INSERT INTO Comentarios
VALUES(DEFAULT, 5, 1, "Excelente auto! Me encanto el diseño!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO Comentarios
VALUES(DEFAULT, 5, 3, "Me parecio muy elevado el precio. Igualmente muy lindo auto.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO Comentarios
VALUES(DEFAULT, 5, 4, "Gran auto y muy buen motor.", DEFAULT, DEFAULT, DEFAULT);

-- ------------------------

INSERT INTO Comentarios
VALUES(DEFAULT, 6, 3, "Me encanta ese auto, es muy rapido!", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO Comentarios
VALUES(DEFAULT, 6, 5, "No me gustan los colores publicados, no hay otros?", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO Comentarios
VALUES(DEFAULT, 6, 1, "Podría ser mejor", DEFAULT, DEFAULT, DEFAULT);

-- ------------------------
INSERT INTO Comentarios
VALUES(DEFAULT, 7, 2, "Choque con este auto, no me gusto nada.", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO Comentarios
VALUES(DEFAULT, 7, 4, "Muy bueno.", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO Comentarios
VALUES(DEFAULT, 7, 1, "Muy buena experiencia, lo recomiendo.", DEFAULT, DEFAULT, DEFAULT);

-- -----------------------

INSERT INTO Comentarios
VALUES(DEFAULT,8,1,"El auto de mis suenios",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO Comentarios
 VALUES(DEFAULT,8,4,"En que condicion se encuentra?",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO Comentarios
VALUES(DEFAULT,8,3,"Cuantos kilometros tiene?",DEFAULT,DEFAULT,DEFAULT);

-- --------------------


INSERT INTO Comentarios
VALUES(DEFAULT, 9, 2, "Muy buen diseño!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO Comentarios
VALUES(DEFAULT, 9, 3, "El auto que me falta para completar mi colección!", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO Comentarios
VALUES(DEFAULT, 9, 1, "Estupendo auto.", DEFAULT, DEFAULT, DEFAULT);

-- --------------------

INSERT INTO Comentarios
VALUES(DEFAULT, 10, 5, "Cuanto cuesta?", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO Comentarios
VALUES(DEFAULT, 10, 3, "Es un precio muy elevado para este auto.", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO Comentarios
VALUES(DEFAULT, 10, 2, "Muy buena  experiencia, lo recomiendo.", DEFAULT, DEFAULT, DEFAULT);

-- --------------------

ALTER TABLE usuarios
ADD nombre VARCHAR(100) NOT NULL;
UPDATE usuarios
SET nombre = "usuario1"
WHERE id = 1;

UPDATE usuarios
SET nombre = "usuario2"
WHERE id = 2;

UPDATE usuarios
SET nombre = "usuario3"
WHERE id = 3;

UPDATE usuarios
SET nombre = "usuario4"
WHERE id = 4;

UPDATE usuarios
SET nombre = "usuario5"
WHERE id = 5;