const edad = 20;
const miembro = true;

if (edad >= 18) {
    if (miembro) {
        console.log("Puedes acceder a la sección de miembros adultos.");
    } else {
        console.log("Eres mayor de edad, pero no eres miembro.");
    }
} else {
    if (miembro) {
        console.log("Eres miembro, pero no tienes la edad suficiente para acceder a esta sección.");
    } else {
        console.log("No eres mayor de edad ni miembro.");
    }
}
