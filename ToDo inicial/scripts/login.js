/* Creacion de un nuevo usuario */

const todoApiUrl = "https://ctd-todo-api.herokuapp.com/users/login";

const nuevoUsuario = {
    firstName: "Micaela",
    lastName: "Gonella",
    email: "gonellamicaela@gmail.com",
    password: "2019812"
};
const payloadToDo =  JSON.stringify(nuevoUsuario);

const settingsToDo = {
    method: 'POST',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    body: payloadToDo
}

fetch(`${todoApiUrl}/users`, settingsToDo)
.then(response => response.json())
.then(respuesta => {
    console.log(respuesta);
})

/*Logica de la app*/

window.addEventListener("load", function(){

const formulario = document.querySelector("form");
const inputEmail = document.querySelector("#inputEmail");
const inputPassword = document.querySelector("#inputPassword")

formulario.addEventListener ("submit", function(e){
    e.prevenDefault();

    const resultadoValidacion = validarNoVacio(inputEmail.value) && validarNoVacio(inputPassword.value);

    if(resultadoValidacion){
        // desplegamos la logica de una validacion correcta
        const datosUsuario = normalizacionLogin(inputEmail.value , inputPassword.value);
        console.log(datosUsuario)
        fetchApiLogeo (todoApiUrl, datosUsuario);
    }else{
        console.log("No completó correctamente los datos");
    }
    formulario.reset();
};

/*------funciones-----*/

function validarNoVacio(dato){
    let resultado = true;
    // causas de no validacion
    if (dato === ""){
        resultado = false;
    }
    return resultado;
}

function normalizacionLogin (email, password){
    // la documentacion de la API me dice como es el formato de los datos (ver login)
    const Usuario = {
        email: email.toLowerCase().trim(),
        password: password.trim(),
    }
    return Usuario;
}

function fetchApiLogeo (url, payload /*datos en JSON (info q va a la API))*/){
    const settings = {
        method : "POST",
        header : {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(payload)
    }

    fetch (url, settings)
    .then (respuesta => respuesta.json())
    .then (data => {
        console.log(data);
        if (data.jwt){
            //accionar pensadno q el resultado es usuario y pass correcto
            localStorage.setItem("jwt", data.jwt  /* o JSON.stringify(data) */);
            //redirijo a la pantalla de tareas
            location.href = '/mis-tareas.html'
        }else{
            alert("Alguno de los datos ingresados es incorrecto");
        }
        })
    };
});


