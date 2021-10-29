const usuarioLoggeado = localstorage.getItem('token');
// chequeo si el usuario eta loggeado sino se saca de la vista
if (usuarioLoggeado){
    location.replace("/")
};

window.addEventListener("load", function(){

/************Lógica de la app ****************/
const apiBaseUrl = 'https://ctd-todo-api.herokuapp.com/';
const jwt = localstorage.getItem('token');
const nodoNombreUsuario = document.querySelector("user-info p");
const nodoFormulario = document.querySelector(".nueva-tarea");
const inputNuevaTarea = this.document.querySelector("#nueva-tarea");
const btnCerrarSesion = this.document.querySelector("#closeApp");

   //escuchar el click para cerrar sesion
btnCerrarSesion.addEventListener("click", function(){
    if (confirm("Desea cerrar sesión?")){
            localStorage.clear();
    location.replace("/");
    }
})

/*************Acciones apenas arranca la app***************/
obtenerDatosUsuario(`${apiBaseUrl}/users/getMe`,jwt);
obtenerListaTareas(`${apiBaseUrl}/tasks`,jwt)

nodoFormulario.addEventListener("submit", function(e){
    e.preventDefault();

    console.log(inputNuevaTarea.value);

    const nuevaTarea ={
        description : inputNuevaTarea.value,
        completed : false,
    };


    crearNuevaTarea(`${apiBaseUrl}/tasks`,jwt, nuevaTarea);
    nodoFormulario.reset();
});

/************funcionalidades*************/
function renderizarTareas (listado){
    const nodoTareasPendientes = document.querySelector(".tareas-pendientes");
    const nodoTareasTerminadas = document.querySelector(".tareas-terminadas");
    nodoTareasPendientes.innerHTML= "";
    nodoTareasTerminadas.innerHTML= "";

    listado.forEach(tarea => {
        if(tarea.completed){
            //pintamos en la caja de tareas terminadas
            nodoTareasTerminadas.innerHTML += 
            `<li class="tarea">
            <div class="done"></div>
            <div class="descripcion">
            <p class="nombre">${tarea.description}</p>
            <div>
            <button><i id="${tarea.id}" class="fas
            fa-undo-alt change"></i></button>
            <button><i id="${tarea.id}" class="far
            fa-trash-alt"></i></button>
            </div>
            </div>
            </li>`
        } else {
            nodoTareasPendientes.innerHTML += 
            `<li class="tarea">
            <div class="not-done change" id="${tarea.id}"></div>
            <div class="descripcion">
            1
            <p class="nombre">${tarea.description}</p>
            <p class="timestamp"><i class="far
            fa-calendar-alt"></i> ${tarea.createdAt}</p>
            </div>
            </li>`
        }
        }
    })
    }
}

function crearNuevaTarea(url, token){

    const settings = {
        method : "POST",
        headers : {
            authorization : token,
            'Content-Type : application/json'
        },
        body : JSON.stringify(payload),
    }
    
    fetch(url, setting)
    .then(respuesta => respuesta.json())
    .then (data => {
        console.log(data);
    })
}

function obtenerListaTareas(url, token){
        const settings = {
            method : "GET",
            headers : {
                authorization : token
            }
        }
        
        fetch(url, setting)
        .then(respuesta => respuesta.json())
        .then (data => {
            renderizarTareas(data);
        })
    }

    function obtenerDatosUsuario (url, token){
        const settings = {
            method : "GET",
            headers : {
                authorization : token
            }
        }
        
        fetch(url, setting)
        .then(respuesta => respuesta.json())
        .then (data => {
            console.log(data);
            nodoNombreUsuario.innerText = data.firstName;
        })
    }
})