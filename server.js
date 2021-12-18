var express = require("express");
var app = express();
var bodyparser = require('body-parser');
var oracledb = require('oracledb');
const cors = require("cors");

var corsOptions = {
    origin: "http://localhost:4200/index.html"
}
app.use(cors());

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({
    extended: true
}));

var connAttrs = {
    "user" : "DIDIERSNACK",
    "password" : "snack123",
    "connectString": "localhost/xe"
}

app.get('/', (req,res)=>{
    res.send([{message: 'hola a todos'}]);
});



/////Consulter users////// done
app.get('/select', function (req, res) {
    "use strict";

    console.log("siu");

    oracledb.getConnection(connAttrs, function (err, connection) {
        if (err) {
            // Error connecting to DB
            res.set('Content-Type', 'application/json');
            res.status(500).send(JSON.stringify({
                status: 500,
                message: "Error connecting to DB",
                detailed_message: err.message
            }));
            return;
        }
        connection.execute("SELECT NOMBRE FROM RESTAURANTE ORDER BY RANKING DESC", {}, {
            outFormat: oracledb.OBJECT // Return the result as Object
        }, function (err, result) {
            if (err) {
                res.set('Content-Type', 'application/json');
                res.status(500).send(JSON.stringify({
                    status: 500,
                    message: "Error getting the dba_tablespaces",
                    detailed_message: err.message
                }));
            } else {
                res.contentType('application/json').status(200);
                res.send(JSON.stringify(result.rows));
				
            }
            // Release the connection
            connection.release(
                function (err) {
                    if (err) {
                        console.error(err.message);
                    } else {
                        console.log("GET /sendTablespace : Connection released");
                    }
                });
        });
    });
});

app.post('/create', async function(req, res) {
    oracledb.getConnection(connAttrs, function (err, connection) {
        if (err) {
            // Error connecting to DB
            res.set('Content-Type', 'application/json');
            res.status(500).send(JSON.stringify({
                status: 500,
                message: "Error connecting to DB",
                detailed_message: err.message
            }));
            return;
        }

        const table = req.params.table;
        const key = String(req.body.key);
        const keyType = req.body.keyType;
        const createObj = req.body.createObj;

        var keys = Object.keys(createObj);
        var query = `INSERT INTO PROVEDOR VALUES(${key})`;

        console.log(`Ejecutando: ${query}`);

        connection.execute(query, {}, {
            outFormat: oracledb.OBJECT, // Return the result as Object
            autoCommit: true  //Para que la eliminación se efectúe correctamente
        }, function (err, result) {
            if (err) {
                res.set('Content-Type', 'application/json');
                res.status(500).send(JSON.stringify({
                    status: 500,
                    message: "Error getting the dba_tablespaces",
                    detailed_message: err.message
                }));
            } else {
                res.contentType('application/json').status(200);
                res.send(JSON.stringify('Se creó el registro con ID: '+result.lastRowid));
            }
            // Release the connection
            connection.release(
                function (err) {
                    if (err) {
                        console.error(err.message);
                    } else {
                        console.log("GET /sendTablespace : Connection released");
                    }
            });
        });
    });
});

app.listen(4201,'localhost',function(){
    console.log("Server escuchando en el puerto 4201");
})