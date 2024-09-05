function distinct( list ) {
  return Array.from( new Set( list ) );
}

const nums = [ 1, 2, 1, 1, 3, 2 ];
const newNums = distinct( nums );
console.log( newNums );