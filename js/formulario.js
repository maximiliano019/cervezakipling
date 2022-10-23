let nombre = document.getElementById("varNombre")
let apellido = document.getElementById("varApellido")
let nrodoc = document.getElementById("varNroDoc")
let telefono = document.getElementById("varTelefono")
let email = document.getElementById("varEmail")
let mensaje = document.getElementById("varMensaje")
let form = document.getElementById("form")
let parrafo = document.getElementById("errores")

form.addEventListener("submit",e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regExpreEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    
    if(nombre.value.length < 2){
        warnings = warnings + `El nombre no es valido. `
        warnings = warnings + `Debe tener mas de 2 caracteres <br>`
        entrar = true
    }

    if(apellido.value.length < 2){
        warnings = warnings + `El apellido no es valido. `
        warnings = warnings + `Debe tener mas de 2 caracteres <br>`
        entrar = true
    }

    if(nrodoc.value.length < 7 || nrodoc.value.length > 10){
        warnings = warnings + `Número de documento no es valido. `
        warnings = warnings + `Debe tener mas de 6 caracteres <br>`
        entrar = true
    }

    if(telefono.value.length < 7){
        warnings = warnings + `Telefono no es valido. `
        warnings = warnings + `Debe tener mas de 6 caracteres <br>`
        entrar = true
    }

    if(!regExpreEmail.test(email.value)){
        warnings = warnings + `El email no es valido <br>`
        entrar = true
    }
    if(mensaje.value.length < 10){
        warnings = warnings + `Mensaje no es valido. `
        warnings = warnings + `Debe tener mas de 10 caracteres <br>`
        entrar = true
    }
    if (entrar){
        parrafo.innerHTML = warnings;
    }
    else{
        parrafo.innerHTML = "Enviado...";
    }
})

