// Diseña un algoritmo que capture el día de la semana como un número y determine si: Es un día "entre semana", un día de "fin de semana" o es un día que no existe usando if-else.
// Elaborado por: Malher

let numeroD = prompt("Ingresar número");

if( isNaN (numeroD)){
    console.log("No es un numero")
}
else{
    if (numeroD >= 1 && numeroD <= 7){
         if(numeroD >=1 && numeroD <= 5 ){
            console.log("Es un dia entre semana");
         }
         else if(numeroD == 6 || numeroD == 7){
            console.log("Es un fin de semana");
         }        
    }
    else{
        console.log("No es un dia valido")
    }
}