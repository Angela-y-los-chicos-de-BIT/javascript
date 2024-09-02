const edad = 17;
const miembro = false;
const invitado = true;

const mensaje = edad >= 18
    ? ( miembro 
        ?   "Puedes acceder a la sección de miembros adultos." 
        :   ( invitado 
                ? "Eres un invitado, puedes acceder temporalmente." 
                : "Eres mayor de edad, pero no eres miembro ni invitado.")
            )
    : ( miembro 
        ?   "Eres miembro, pero no tienes la edad suficiente para acceder a esta sección." 
        :   ( invitado 
                ? "Eres un invitado menor de edad, el acceso es limitado." 
                : "No eres mayor de edad, ni miembro, ni invitado.")
            );

console.log(mensaje);
