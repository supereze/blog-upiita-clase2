//Este ya es la configuracion para el servidor dinamico
/**obtener una variable para acceder a las funcionalidades de express**/
var express= require("express");
/*Configurar mi servidor*/
var app=express();
/*Hacemos que  la pagina sea dinamica*/ //para obtener las librerias va antes de levantar la pagina 
var consolidate = require("consolidate");/*libreria que nos permite configurar vista*/
var dust = require("dustjs-linkedin");//Motor para crear vistas dinamicas
/*tipo de puerto por el que se atiendan las peticiones*/
app.listen(8081);
/*Imprime en la consola del servidor*/
console.log("servidor levantado...");
/*despacha archivos estaticos*/
//app.use("/", express.static(__dirname + "/vistas"));
app.use("/css", express.static(__dirname + "/css"));
app.use("/imagenes", express.static(__dirname + "/imagenes"));
app.use("/videos", express.static(__dirname + "/videos"));

//configurar nuestro motor de vistas
app.set("view engine","dust");//nuestras vistas tendran extension .dust
app.engine("dust", consolidate.dust);//indicamos el engine que voy a utilizar
//indicamos la carpeta que contiene las vistas
app.set("views", __dirname + "/vistas");
//Hacemos que el servidor pueda leer los datos que recibe del cliente
app.use(express.urlencoded());

//Hacemos que el servidor responda a peticiones get
app.get("/index", function(request,response){
	//la logica de como respondere a la peticion /index
	response.render("index");
});
/*Responder a una peticion post*/
app.post("/suscribirse",function(request, response){
	console.log("Email:" + request.body.email);
	response.render("respuesta_suscribirse",{
		asunto: "Yo soy el servidor",
		email: request.body.email
	});
});

//************Ejercicio practico contacto*****
//Hacemos que el servidor responda a peticiones get
app.get("/contacto", function(request,response){
	//la logica de como respondere a la peticion /index
	response.render("contacto");
});
/*Responder a una peticion post*/
app.post("/contactarse",function(request, response){
	console.log("Email:" + request.body.nombre);
	console.log("Email:" + request.body.email);
	console.log("Email:" + request.body.wsite);
	console.log("Email:" + request.body.edad);
	console.log("Email:" + request.body.coment);
	response.render("r_contacto",{
		asunto: "Yo soy el servidor",
		nombre: request.body.nombre,
		email: request.body.email,
		wsite: request.body.wsite,
		edad: request.body.edad,
		coment: request.body.coment
	});
});



