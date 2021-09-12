const jsonHelper = require(__dirname + "/jsonhelper");
let autosTodos = jsonHelper.leerJson("autos");

// console.log(autosTodos) //traigo todos
// console.log(autosTodos[1]); // traigo uno solo

let carrera = {
    autos: autosTodos,
    autosPorTanda: 6,
    autosHabilitados: function(){
        let habilitados = this.autos.filter(function(x){
                                            return x.sancionado == false
                                            })
        return habilitados;
    },
    listarAutos: function(array){
        array.forEach(x=>{
            let estado=0;
                if(x.sancionado === true){
                    estado = 'estado: Sancionado';
                }else{
                    estado = 'estado: Habilitado';
                }
        console.log('Piloto: '+x.piloto+' patente: '+x.patente+' peso en kg: '+x.peso+ ' ' + estado);
        }
    )
    }, 
    buscarPorPatente: function(patente){
        let patenteEncontrada = this.autos.find(x=> x.patente === patente)
        return patenteEncontrada;
    },
    buscarPorCilindrada: function(num){
        let autosHabilitados = this.autosHabilitados();
        return autosHabilitados.filter(x => x.cilindrada <=  num);
    },
    ordenarPorVelocidad: function(){
        let habilitados = this.autosHabilitados();
        return habilitados.sort((a,b) => {return b.velocidad - a.velocidad })

    },
    generarTanda: function(cilindrada, peso){
        let cilindradaEncontrada = this.buscarPorCilindrada(cilindrada);
        return (cilindradaEncontrada.filter(x => x.peso <= peso)).slice(0, this.autosPorTanda);
    },
    listarPodio: function(tandaGenerada){
        (tandaGenerada.sort((a,b) => b.puntaje - a.puntaje)).slice(0,3);
        console.log( 'El ganador es: '+tandaGenerada[0].piloto+ ' con un puntaje de '+tandaGenerada[0].puntaje+
            ' El segundo puesto es para '+tandaGenerada[1].piloto+ ' con un puntaje de '+tandaGenerada[1].puntaje+
            ' El tercer puesto es para '+tandaGenerada[2].piloto+ ' con un puntaje de '+tandaGenerada[2].puntaje);
    }
};

// let pilotoHabilitado = carrera.autosHabilitados();
// console.log(carrera.autosHabilitados());
// console.log(carrera.listarAutos(carrera.autos));
// console.log(carrera.buscarPorPatente('MMN771'));
// console.log(carrera.buscarPorCilindrada(1600));
// console.log(carrera.ordenarPorVelocidad(carrera.autos));
let tandaGenerada = carrera.generarTanda(1500, 2000);
console.log(carrera.listarPodio(tandaGenerada));



