const express = require('express');
const cors = require('cors')//Capacidad para hacer solicitudes cruzadas
const app = express();
require('./server/config/mongoose.config') //Importamos la configuracion de conexion a la BS Mongo
app.use(cors())
app.use(express.json())
app.use(express.urlencoded( {extended: true}));
require('./server/routes/product.routes')(app);
app.listen(8000,()=>{
    console.log("Listening at Port 8000")
});