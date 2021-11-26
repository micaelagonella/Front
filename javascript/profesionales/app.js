const archivos = require("./lecturaEscritura");
let arrayProfesionales = archivos.leerJson("profesionales");// trabajaremos con este array de objetos literales
//console.log(arrayProfesionales[4].especialidad); // accedo a la especialidad del arreglo 4

arrayProfesionales.filter((x) => console.log(x.nombre+' - '+ x.especialidad)); //imprimo en cada iteracion el nom y la esp de cada objeto

arrayProfesionales.map((x) => x.honorarioConsulta = x.honorarioConsulta * 1.05);
console.log(arrayProfesionales) // recorro y modifico el array en cada iteracion la propiedad honocons incrementando 5% 

let profesionalesDeshabilitados = arrayProfesionales.filter((x)=> x.estaHabilitado === false)
console.log(profesionalesDeshabilitados); // filtro del array los que no estan habilitados, me da array nuevo con esa condicion.

let estaHabilitado = profesionalesDeshabilitados.map((x)=> x.estaHabilitado = true);
console.log(profesionalesDeshabilitados); // modifica del array la prop estaHabilitado a true.
console.log(estaHabilitado); // el array resultado del método

let totalConsultas = arrayProfesionales.reduce((acum, x) => acum + x.cantidadConsultas, 0);
console.log(totalConsultas); // cantidad de consultas atendidas por todos los profesionales

let consultaOrdenada = arrayProfesionales.sort(function(a, b){return b.cantidadConsultas - a.cantidadConsultas}); // ordena de mayor a menor la cantconsulta
console.log(consultaOrdenada); // resultado del método

let consultaPuntuacion = consultaOrdenada.sort(function(a, b){return b.puntuacion - a.puntuacion}); // ordena de mayor a menor la puntuacion
console.log(consultaPuntuacion); // resultado del método (pre ordenada por cantidad y dsp por puntuacion)


let profesionalFiltrado = arrayProfesionales.filter((x[i]) => console.log(x.identificador === index));

console.log(profesionalFiltrado,1);



