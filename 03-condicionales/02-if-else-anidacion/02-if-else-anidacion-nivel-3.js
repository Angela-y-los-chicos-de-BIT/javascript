const edad = 17;
const miembro = false;
const invitado = true;

if (edad >= 18) {
    if (miembro) {
        console.log("Puedes acceder a la sección de miembros adultos.");
    } else {
        if (invitado) {
            console.log("Eres un invitado, puedes acceder temporalmente.");
        } else {
            console.log("Eres mayor de edad, pero no eres miembro ni invitado.");
        }
    }
} else {
    if (miembro) {
        console.log("Eres miembro, pero no tienes la edad suficiente para acceder a esta sección.");
    } else {
        if (invitado) {
            console.log("Eres un invitado menor de edad, el acceso es limitado.");
        } else {
            console.log("No eres mayor de edad, ni miembro, ni invitado.");
        }
    }
}
