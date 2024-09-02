const loteria = [
//         0   1   2   3   4
/*0*/    [ 3 , 7 , 9,  11, 15 ],
/*1*/    [ 34, 6 , 34, 21, 35 ],
/*2*/    [ 6 , 17, '-',13, 20 ],
/*3*/    [ 33, 78, 1,  37, 51 ],
/*4*/    [ 13, 42, 67, 32, 89 ]
];


for( let j = 0; j < loteria.length; j++ ) {
    let data = '';
    for( let i = 0; i < loteria[ j ].length; i++ ) {
        data = data + ' ' + loteria[ j ][ i ];
    }
    
}

console.log( data );