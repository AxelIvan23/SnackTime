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
        connection.execute("SELECT NOMBRE FROM RESTAURANTE WHERE TIPO='Mexicano' AND ROWNUM <=5 ORDER BY RANKING DESC", {}, {
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

<<<<<<< HEAD
=======
/////Consulter users////// done
app.get('/BusCoord/:lat/:lngt', function (req, res) {
    "use strict";

    
    const lngt_inf = Number(req.params.lngt) -0.04;
    const lngt_sup = Number(req.params.lngt) +0.04;

    const lat_inf = Number(req.params.lat) -0.04;
    const lat_sup = Number(req.params.lat) +0.04;
    console.log(lat_sup);
>>>>>>> 2d0c0da7b65b056b45a7b7bdf73108591030a2ec
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
<<<<<<< HEAD
        connection.execute("SELECT NOMBRE FROM RESTAURANTE WHERE TIPO='Italiano' AND ROWNUM <=5 ORDER BY RANKING DESC", {}, {
=======

        const query = "SELECT NOMBRE, DESCRIPCION, TIPO, ID, LATITUD, LONGITUD FROM RESTAURANTE WHERE LATITUD>"+lat_inf+" AND LATITUD<"+lat_sup+" AND LONGITUD>"+lngt_inf+" AND LONGITUD <"+lngt_sup;
        console.log(query);
        connection.execute(query, {}, {
>>>>>>> 2d0c0da7b65b056b45a7b7bdf73108591030a2ec
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
<<<<<<< HEAD
				
=======
>>>>>>> 2d0c0da7b65b056b45a7b7bdf73108591030a2ec
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
<<<<<<< HEAD
app.post('/actualizar', async function(req, res) {
=======

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

app.post('/create', async function(req, res) {
>>>>>>> 2d0c0da7b65b056b45a7b7bdf73108591030a2ec
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
        var query = `INSERT INTO EMPRESA VALUES(${key})`;

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