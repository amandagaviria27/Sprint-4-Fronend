"use strict";
//Importa la libreria express
const express = require("express");
//Parsear el contenido a JSON
const bodyParser = require("body-parser");
const cors = require("cors");
// Importa la libreria de mongoose
const mongoose = require("mongoose");
const crypto = require('crypto');

// Instancia el framework express
const app = express();
//Parsea los datos a json
app.use(bodyParser.json());

//Middleware
//app.use(cors())
const Formulario = require("./src/modelos/formModelo");
// const User = require("./src/modelos/usuModelo");
var brnombre, brapellido, brnumeroidentificación, brcorreo,
        brtelefono, brtipoencomienda, brdireccionrecogida,
        brdepartamento, brciudad, brfechayhora,
        brlongitud, brpeso, brdireccionentrega, brciudadentrega,
        brdatosdestinatario, bridentificacióndestinatario

// app.post("/login", (req, res) => {
//     const { usu, pass } = req.body //{ usu: "admin", pass:"1234" }
//     const passCifrado = crypto.createHash('sha256').update(pass).digest('hex');
//     User.findOne({ usuario: usu, password: passCifrado }, (error, dataUsu) => {
//         if (error) {
//             return res.send({ msg: "Error al loguearse", estado: "error" })
//         } else {
//             if (dataUsu !== null) {
//                 return res.send({ estado: "ok", url: "/producto" })
//             }
//         }
//         return res.send({ msg: "Error al loguearse", estado: "error" })
//     })
// })

app.post("/formulario/guardar", (req, res) => {
    const data = req.body

    //Instrucciones para guardar en BD
    const br = new Formulario(data);
    br.save((error) => {
        if (error) {
            return res.send({ msg: "Error al guardar", estado: "error" })
        }
        return res.send({ msg: "Guardado con éxito", estado: "ok" })
    });
})

app.post("/formulario/list", (req, res) => {
    Formulario.find({}, (error, br) => {
        if (error) {
            return res.send({ estado: "error", msg: "ERROR: AL buscar" })
        } else {
            if (br !== null) {
                return res.send({ estado: "ok", msg: "ok", data: br })
            } else {
                return res.send({ estado: "error", msg: "Sin datos" })
            }
        }
    })
})

app.post("/formulario/get", (req, res) => {
    const { nombre } = req.body

    Formulario.find({ nombre }, (error, br) => {
        if (error) {
            return res.send({ estado: "error", msg: "ERROR: AL buscar" })
        } else {
            if (br !== null) {
                return res.send({ estado: "ok", msg: "ok", data: br })
            } else {
                return res.send({ estado: "error", msg: "Dato NO encontrado" })
            }
        }
    })
})

app.post("/formulario/delete", (req, res) => {
    const { id } = req.body

    Formulario.deleteOne({ _id: id }, (error) => {
        if (error) {
            return res.send({ estado: "error", msg: "ERROR: AL Eliminar" })
        } else {
            return res.send({ estado: "ok", msg: "Borrado con éxito" })
        }
    })
})

/**
 * Ruta: /producto/update
 * Metodo: POST
 * Headers: {content-type:application/json}
 * Body: {nombre:"papa", precio:2000, stock:100}
 */
app.post("/formulario/update", (req, res) => {
    //Obtiene los datos del producto (desestructura)
    const { nombre, apellido, numeroidentificación, correo, telefono, tipoencomienda, 
        direccionrecogida, departamento, ciudad, fechayhora, longitud, peso, 
        direccionentrega, ciudadentrega, datosdestinatario, 
        identificacióndestinatario } = req.body

    //Se usa el modelo Producto
    Formulario.updateOne({ _id: id }
        , {
            $set:
            {
            nombre, apellido, numeroidentificación, correo, telefono, tipoencomienda, 
            direccionrecogida, departamento, ciudad, fechayhora, longitud, peso, 
            direccionentrega, ciudadentrega, datosdestinatario, 
            identificacióndestinatario
            }
        })
        .exec(
            (error, result) => {
                if (!error) {
                    //Si modifico un documento
                    if (result.modifiedCount > 0)
                        return res.send({ estado: "ok", msg: "Dato actualizado :)" });
                    return res.send({ estado: "error", msg: "Dato NO modificado :(" });
                }
                return res.send({ estado: "error", msg: "Error al actualizar :<" });
            }
        );
})

//Se conecta a BD mongodb
mongoose.connect("mongodb+srv://usuarioprueba:12345@cluster0.go591gt.mongodb.net/baseFormulario?retryWrites=true&w=majority")
    .then(res => console.log("Conectado a BD"))
    .catch(err => console.log(err))

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});