function Nacionalidad(pais){
    if(pais==='colombia'){
        console.log("Eres colombiano")
    }else if(pais==='argentina'){
        console.log("Eres argentino")
    }else{
        console.log("No se cual pais es")
    }
}

Nacionalidad('argentina')

function edad(numero){
    if(numero >= 18){
        console.log("Eres mayor de edad")
    }else{
        console.log("Eres menor de edad")
    }
}

edad(20)