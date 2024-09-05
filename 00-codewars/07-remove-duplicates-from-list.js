function distinct( list ) {
    return list.reduce( ( acc, rec ) => {
        return( ! acc.includes( rec ) ) ? [ ...acc, rec ] : acc
    },[]);
}

const nums = [ 1, 2, 1, 1, 3, 2 ];
const newNums = distinct( nums );
console.log( newNums );