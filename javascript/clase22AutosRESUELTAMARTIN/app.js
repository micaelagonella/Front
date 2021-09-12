const jsonHelper = require("./lecturaEscrituraJson");

let listaAutos = jsonHelper.leerJson("autos");

const concesionaria = {
  autos: listaAutos,
  agregarAuto: function (marca, modelo, anio, precio, patente) {
    let nuevoAuto = {
      marca: marca,
      modelo: modelo,
      anio: anio,
      precio: precio,
      patente: patente,
      vendido: false,
    };
    this.autos.push(nuevoAuto);
    jsonHelper.escribirJson("AUTOS", this.autos);
    return (
      "Vehiculo añadido correctamente: " +
      nuevoAuto.marca +
      " " +
      nuevoAuto.modelo +
      "."
    );
  },
  venderAuto: function (patente) {
    let seleccionado;
    for (let i = 0; i < this.autos.length; i++) {
      if (patente === this.autos[i].patente) {
        seleccionado = this.auto[i];
        this.autos[i].vendido = true;
      }
    }
    jsonHelper.escribirJson("AUTOS", this.autos);
    return (
      "Auto vendido correctamente: " +
      seleccionado.marca +
      " " +
      seleccionado.modelo +
      "."
    );
  },
  totalDeVentas: function () {
    let ganancia = 0;
    for (let i = 0; i < this.autos.length; i++) {
      if (this.autos[i].vendido) {
        ganancia += this.autos[i].precio;
      }
    }
    return "La ganancia total actual es de: $" + ganancia;
  },
  eliminarAuto: function (patente) {
    let arrAux = [];
    let eliminado;
    for (let i = 0; i < this.autos.length; i++) {
      if (this.autos[i].patente === patente) {
        arrAux.push(this.autos[i]);
        // console.log(eliminado);
        eliminado = arrAux.pop();
      } else {
        arrAux.push(this.autos[i]);
      }
    }
    if (this.autos.length === arrAux.length) {
      return "No se ha encontrado ningun vehiculo con esa patente, por favor verifique!";
    }
    jsonHelper.escribirJson("AUTOS", arrAux);
    return (
      "El vehiculo: " +
      eliminado.marca +
      " " +
      eliminado.modelo +
      ", patente: " +
      eliminado.patente +
      " ha sido eliminado correctamente."
    );
  },
};

console.log(concesionaria.eliminarAuto("RDH130"));
