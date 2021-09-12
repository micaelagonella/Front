const fs = require("fs");

const gestorArchivos = {
  leerArchivos: function (nombreArchivo) {
      const ruta = __dirname + "/" + nombreArchivo + ".JSON";
      const datosALeer = fs.readFileSync(ruta, 'utf-8')
      return JSON.parse(datosALeer)
  },

  escribirArchivos: function(nombreArchivo, datosNuevos) {
    const ruta = __dirname + "/" + nombreArchivo + ".JSON";
    const datosAJSON = JSON.stringify(datosNuevos);
    return fs.writeFileSync(ruta, datosAJSON)
  }
};

module.exports = gestorArchivos;