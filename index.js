const cors = require('cors'); //que  tenga diferente url
const express = require('express'); //iniciarlizar el servidor
const mongoose = require("mongoose"); //nos ayuda a crear los datos de la base de datos
const axios = require("axios"); //la conexiones con el frontent

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 5000;

app.listen(PORT,function(){ //vamos a indicarle al servidor que vamos a entrar
console.log("CONECTADO AL PUERTO" + PORT);
});

const bbdd = "app-telefono";

const url = "mongodb+srv://pardosebastiandatabse:superrobotwarskusuha123@cluster0.pzf3wgm.mongodb.net/" + bbdd + "?retryWrites=true&w=majority&appName=Cluster0";

const connection = mongoose.connect(url)

connection.then(function () {
    console.log("Conexión a la base de datos establecida");
}).catch(function (error) {
    console.error("Error de conexión a la base de datos:" + error);
});

require("./assets/models/Mensajes");  

const Mensajes = mongoose.model("Mensajes");

app.post("/subir", function (req, res) {       

const mensaje = req.body.mensaje;

try{
    Mensajes.create(mensaje);

    res.send({
    status: true,
    message: "Mensaje guardado correctamente"
    });   
}

catch{error}{
    res.send({
    status: false,
    message: "Error al guardar el mensaje",
    error: error.message
    })
    
}   
});

app.get("/recibir", async function (rec,res){
    try {
        const mensajes = await Mensajes.find({});
        res.send({
        status: true, 
        message: "Mensaje racibido correctamente",
        datos:mensajes
        })
    }

    catch(error) {
        res.send({
    status: false,
    message: "Error al enviar mensaje",
    error: error.message

    }
        )
        }

});