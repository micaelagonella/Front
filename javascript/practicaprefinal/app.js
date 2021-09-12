const jsonHelper = require(__dirname + "/jsonhelper");
let biciTodas = jsonHelper.leerJson("bici");

//console.log(biciTodas);

let carrera = {
    bicicletas: biciTodas,
    bicicletasPorTanda: 4,
    ciclistasHabilitados: function(){
        return this.bicicletas.filter(x=> x.dopaje === false);
    },
    listarBicicletas: function(array){
        array.forEach(x=>{
            let estado=0;
                if(x.dopaje === true){
                estado=' estado: Inhabilitado';
            }else{
                estado= ' estado:  Habilitado';
            }
            console.log(
                'Ciclista: '+ x.nombre +
                ' Marca: '+ x.marca +
                ' Rodado: ' + x.rodado+
                ' Peso: ' + x.peso+ ' Kg'+
                ' Largo ' +x.largo+
                estado
            )
        })
    },
    buscarPorId: function(num){
                let array = this.bicicletas;
                return array.find(x=> x.id === num)
    },
    buscarPorRodado: function(num){
                let bicisHabilitadas = this.ciclistasHabilitados();
                return bicisHabilitadas.filter(x=> x.rodado === num)
    },
    ordenarPorRodado: function(){
                let bicisPorRodado = this.bicicletas;
                return bicisPorRodado.sort((a,b)=> a.rodado - b.rodado);
    },
    generarTanda: function(rodado, peso){
        let rodadoEncontrado = this.buscarPorRodado(rodado)
        rodadoEncontrado.filter(x=> x.peso <= peso)
        return rodadoEncontrado.slice(0, this.bicicletasPorTanda);
    },
    calcularPodio: function(tanda){
        (tanda.sort((a,b) => b.puntaje - a.puntaje)).slice(0,3);
        console.log( 'El ganador es: '+tanda[0].ciclista+', con un puntaje de '+tanda[0].puntaje+
        ' El segundo puesto es para: '+tanda[1].ciclista+', con un puntaje de '+tanda[1].puntaje+
        ' El tercer puesto es para: '+tanda[2].ciclista+', con un puntaje de '+tanda[2].puntaje);
    }
};

// console.log(carrera.ciclistasHabilitados());
console.log(carrera.listarBicicletas(carrera.bicicletas));
// console.log(carrera.buscarPorId(1));
// console.log(carrera.buscarPorRodado(24));
// console.log(carrera.ordenarPorRodado());
// let tanda = carrera.generarTanda(24, 9.248);
// console.log(carrera.calcularPodio(tanda));


