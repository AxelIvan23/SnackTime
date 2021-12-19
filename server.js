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
    "user" : "snack",
    "password" : "snacktime",
    "connectString": "localhost/orcl"
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

app.get('/select2', function (req, res) {
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
        connection.execute("SELECT NOMBRE FROM RESTAURANTE WHERE TIPO='Cafe' AND ROWNUM <=5 ORDER BY RANKING DESC", {}, {
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
app.get('/select3', function (req, res) {
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
        connection.execute("SELECT NOMBRE FROM RESTAURANTE WHERE TIPO='Marisco' AND ROWNUM <=5 ORDER BY RANKING DESC", {}, {
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
app.get('/select4', function (req, res) {
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
        connection.execute("SELECT NOMBRE FROM RESTAURANTE WHERE TIPO='Italiano' AND ROWNUM <=5 ORDER BY RANKING DESC", {}, {
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
/////Consulter users////// done
app.get('/BusCoord/:lat/:lngt', function (req, res) {
    "use strict";

    
    const lngt_inf = Number(req.params.lngt) -0.04;
    const lngt_sup = Number(req.params.lngt) +0.04;

    const lat_inf = Number(req.params.lat) -0.04;
    const lat_sup = Number(req.params.lat) +0.04;
    console.log(lat_sup);
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

        const query = "SELECT NOMBRE, DESCRIPCION, TIPO, ID, LATITUD, LONGITUD FROM RESTAURANTE WHERE LATITUD>"+lat_inf+" AND LATITUD<"+lat_sup+" AND LONGITUD>"+lngt_inf+" AND LONGITUD <"+lngt_sup;
        console.log(query);
        connection.execute(query, {}, {
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

app.get('/detalles/:id', function (req, res) {
    "use strict";

    
    const ID = Number(req.params.id);
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

        const query = "SELECT * FROM RESTAURANTE WHERE ID="+ID;
        console.log(query);
        connection.execute(query, {}, {
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

app.get('/empresa/:id', function (req, res) {
    "use strict";

    
    const ID = Number(req.params.id);
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

        const query = "SELECT * FROM EMPRESA WHERE ID_EMPRESA="+ID;
        console.log(query);
        connection.execute(query, {}, {
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

app.post('/createEmp', function(req, res) {
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

        const empresa = req.body.empresa;
        const fecha = req.body.fecha;
        const pais = req.body.pais;
        const telefono = req.body.telefono;
        const contrasena = req.body.contrasena;
        const email = req.body.email;

        var query = `INSERT INTO EMPRESA(Nombre, Correo, Contra, Telefono, Pais, Fecha_alta) VALUES('${empresa}','${email}','${contrasena}','${telefono}','${pais}',TO_DATE('${fecha}', 'YYYY-MM-DD'))`;

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

app.post('/createRes', function(req, res) {
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

        const nombre = req.body.nombre;
        const descripcion = req.body.descripcion;
        const tipo = req.body.tipo;
        const logo = req.body.logo;
        const ciudad = req.body.ciudad;
        const calle = req.body.calle;
        const fraccionamiento = req.body.fraccionamiento;
        const ext = req.body.ext;
        const cp = req.body.cp;
        const latitud = req.body.latitud;
        const longitud = req.body.longitud;


        var query = `INSERT INTO RESTAURANTE (nombre, descripcion, tipo, logo, ciudad, calle, fraccionamiento, ext, cp, latitud, longitud) VALUES('${nombre}','${descripcion}','${tipo}','${logo}','${ciudad}','${calle}', '${fraccionamiento}', ${ext},${cp},${latitud},${longitud}))`;

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