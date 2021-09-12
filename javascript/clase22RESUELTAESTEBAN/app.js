const gestorArchivos = require("./jsonHelper");

const carrera = {
  autos: gestorArchivos.leerArchivos("autos"),
  autosPorTanda: 6,
  autosHabilitados: function () {
    return this.autos.filter((auto) => !auto.sancionado);
  },
  listarAutos: function (arrayDeAutos) {
    arrayDeAutos.forEach((auto) => {
      console.log(
        " Piloto: " + auto.piloto,
        " patente: " +
          auto.patente +
          ", peso en kg: " +
          auto.peso +
          ", estado:" +
          (auto.sancionado ? "sancionado" : "habilitado")
      );
    });
  },
  buscarPorPatente: function (patente) {
    return this.autos.find((auto) => auto.patente === patente);
  },
  buscarPorCilindrada: function (cilindrada) {
    return this.autosHabilitados().filter(
      (auto) => auto.cilindrada <= cilindrada
    );
  },
  ordernarPorVelocidad: function (arrayDeAutos) {
    return arrayDeAutos.sort(
      (auto1, auto2) => auto1.velocidad - auto2.velocidad
    );
  },
  ordernarPorNombre: function (arrayDeAutos) {
    return arrayDeAutos.sort((auto1, auto2) => {
      if (auto1.piloto.toLowerCase() > auto2.piloto.toLowerCase()) {
        return 1;
      }
      if (auto1.piloto.toLowerCase() < auto2.piloto.toLowerCase()) {
        return -1;
      }

      return 0;
    });
  },
  generarTanda: function (cilindrada, pesoRequerido) {
    const autosSeleccionados = this.buscarPorCilindrada(cilindrada);
    autosSeleccionados.filter((auto) => auto.peso <= pesoRequerido);
    return autosSeleccionados.slice(0, this.autosPorTanda);
  },
  pesoTotalDeLaTandaGenerada: function (arrayDeAutos) {
    return arrayDeAutos.reduce((accu, auto) => accu + auto.peso);
  },
  listarPodio: function (tanda) {
    tanda.sort((pilotoA, pilotoB) => pilotoB.puntaje - pilotoA.puntaje); // mayor a menor
    const podio = tanda.slice(0, 3);
    console.log(
      "El ganador es: " +
        podio[0].piloto +
        ", con un puntaje de " +
        podio[0].puntaje,
      "\nEl segundo puesto es para: " +
        podio[1].piloto +
        ", con un puntaje de " +
        podio[1].puntaje,
      "\nEl tercer puesto es para: " +
        podio[2].piloto +
        ", con un puntaje de " +
        podio[2].puntaje
    );
  },
};

/* console.log("*******mostrar array puro****");
console.log(carrera.autos); */
/* console.log("*******mostrar autos habilitados****");
console.log(carrera.autosHabilitados());  */
/* console.log("*******listar autos****");
carrera.listarAutos(carrera.autos);  */
/* console.log("*******buscarPorPatente****");
console.log(carrera.buscarPorPatente("ABC123")); 
console.log(carrera.buscarPorPatente("natina"));  */
/* console.log("*******buscarPorCilindrada****");
console.log(carrera.buscarPorCilindrada(1200));  
console.log(carrera.buscarPorCilindrada(1500));  */
/* console.log("*******ordernarPorVelocidad****");
console.log(carrera.ordernarPorVelocidad(carrera.autos)); */
/* console.log("*******ordernarPorNombre****");
console.log(carrera.ordernarPorNombre(carrera.autos));  */
/* console.log("*******generarTanda****");
console.log(carrera.generarTanda(1500,1500)); */
/*  console.log("*******pesoTotalDeLaTandaGenerada****");
const tanda = carrera.generarTanda(1500,1500);
console.log(carrera.pesoTotalDeLaTandaGenerada(tanda)); */
const tanda = carrera.generarTanda(1500,1500);
console.log("*******listar podio****");
carrera.listarPodio(tanda);
