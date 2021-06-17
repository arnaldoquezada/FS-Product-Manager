const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/crmdb",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
    .then(() => console.log("Conectado a la base de datos mongo"))
    .catch(err => console.log("Error al conectar la BD mongo: ", err))
