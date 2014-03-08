/**obtener una variable para acceder a las funcionalidades de express**/
var express= require("express");
/*Configurar mi servidor*/
var app=express();
/*tipo de puerto por el que se atiendan las peticiones*/
app.listen(8081);
/*Imprime en la consola del servidor*/
console.log("servidor levantado...");
/*despacha archivos estaticos*/
app.use("/", express.static(__dirname + "/vistas"));
app.use("/css", express.static(__dirname + "/css"));
app.use("/imagenes", express.static(__dirname + "/imagenes"));
app.use("/videos", express.static(__dirname + "/videos"));


/****ruta logica y una real***/
