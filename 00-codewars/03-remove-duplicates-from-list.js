function distinct( list ) {
    let newList = []; 
    
    for( let value of list ) {
      if( ! newList.includes( value ) ) {
        newList.push( value );
      }
    }

    return newList;
}


const nums = [ 1, 2, 1, 1, 3, 2 ];
const newNums = distinct( nums );
console.log( newNums );