const jsonHelper = require ('./jsonHelper'); //requiero el modulo 
let autis = jsonHelper.leerJson("AUTOS"); // (parseo y leo) gracias a la propiedad leerJson guardada en el modulo requerido que tiene el objeto jasonHelper
/* console.log(autis); */

let concesionaria = { //objeto literal conces
    autos : autis , // con prop autos que tiene como valor la lista de autos parseada.
    agregarAuto : function (marca, modelo, anio, precio, patente){ 
        let seleccionado = this.autos
        let newAuto = {marca, modelo, anio, precio, patente};
                seleccionado.push(newAuto)
                console.log("Vehículo agregado correctamente");
                return jsonHelper.escribirJson('Autos', seleccionado)
    },
    venderAuto : function (patente){
                    let seleccionado = this.autos
                    for(let i=0 ; i < seleccionado.length ; i++){
                        if(patente === seleccionado[i].patente){
                            seleccionado[i].vendido=true;
                            return "El vehículo: "+ seleccionado[i].marca + " " + seleccionado[i].modelo + " ha sido vendido"
                        }
                    }
    },
    totalDeVentas : function (){
        precioTotal= 0;
        let seleccionado = this.autos
        for(let i=0 ; i < seleccionado.length ; i++){
            if(seleccionado[i].vendido === true){
                precioTotal += seleccionado[i].precio;
            }
        } return precioTotal;
    },
};

console.log(concesionaria.autos); 
console.log(concesionaria.venderAuto('JHC968')); 
console.log(concesionaria.agregarAuto('micaela','gonella', 2021, 10, 'abc123'));
console.log(concesionaria.autos); 
console.log(concesionaria.totalDeVentas());

