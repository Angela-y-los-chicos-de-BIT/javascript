function distinct( list ) {
    let newList = [];

    list.forEach(  value => ! newList.includes( value ) ? newList.push( value ) : 0);
    
    return newList;
}

const nums = [ 1, 2, 1, 1, 3, 2 ];
const newNums = distinct( nums );
console.log( newNums );