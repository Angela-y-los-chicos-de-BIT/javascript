const edad = 20;
const miembro = true;

const mensaje = edad >= 18
    ?   ( miembro 
            ? "Puedes acceder a la sección de miembros adultos." 
            : "Eres mayor de edad, pero no eres miembro."
        )
    :   ( miembro 
            ? "Eres miembro, pero no tienes la edad suficiente para acceder a esta sección." 
            : "No eres mayor de edad ni miembro."
        );

console.log(mensaje);
