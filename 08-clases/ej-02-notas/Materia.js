class Materia {
    /** Atributos (3): notes, name, average */
    #name;
    #notes;
    #average;

    /** Constructor */
    constructor( nombre, notas = [] ) {
        this.#name = nombre;
        this.#notes = notas;
        this.calculateAverage();
    }

    /** Getters */
    // getName() {
    //     return this.#name;
    // }
    setName( value ) {
        this.#name = value;
    }
    get nameSubject() {
        return this.#name;
    }
    // getNotes() {
    //     return this.#notes;
    // }
    get notesSubject() {
        return this.#notes;
    }
    // getAverage() {
    //     return this.#average;
    // }
    get averageSubject() {
        return this.#average;
    }
    


    /** Methods: (3): calculateAverage, getMaxNote, getMinNote */
    calculateAverage() {
        let sum = 0;

        for ( const note of this.#notes ) {
            sum = sum + note;
        }

        this.#average = sum / this.#notes.length;
    }

    getMaxNote() {
        return Math.max( ...this.#notes );
    }

    getMinNote() {
        // Math.max( 3, 2, 1 );   ---> NO ESPERA Math.max(...[ 3, 2, 1 ]) ---> Operador Spread ... (tres puntos)

        return Math.min( ...this.#notes );
    }

}


const notasMatematicas = [ 3.4, 5, 4.1 ];
const objMate = new Materia( 'Calculo', notasMatematicas );
console.log( objMate );
console.log( objMate.nameSubject );
objMate.setName( 'Matematicas' );
console.log( objMate.nameSubject );

// console.log( objMate.getNotes() );
// console.log( objMate.getAverage() );


// const notasLogica = [ 4.3, 1.2, 4.2, 3.3, 2.7 ];
// const objLogica = new Materia( 'Logica de programacion', notasLogica );
// console.log( objLogica ); 
// console.log( objLogica.getMaxNote() );




// Set value *** Setter: Function set value inside class
let nombre = 'Diego';



// Get value *** Getter: Function get value inside class
console.log( nombre );   // Diego