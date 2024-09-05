function distinct( list ) {

    for ( let i = 0; i < list.length; i++ ) {
        for ( let j = i + 1; j < list.length; j++ ) {
            if ( list[i] == list[j] ) {
                list.splice( j, 1 );
                i--;
            }
        }
    }

    return list
}

const nums = [ 1, 2, 1, 1, 3, 2 ];
const newNums = distinct( nums );
console.log( newNums );