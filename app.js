
// Hacer tabla del 5
//5 x1 = 5
const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')




console.clear();

// console.log(argv);

// console.log('base: yargs', argv.base)


// console.log(process.argv);
// const [, , arg3 = 'base=5']= process.argv;
// const [, base = 5] = arg3.split('=');
// console.log(base);


// const base = 5;
// crearArchivo(base)
//    .then(nombreArchivo => console.log(nombreArchivo,'creado'))
//    .catch(err=>console.log(err));

crearArchivo(argv.b,argv.l,argv.h)
  .then(nombreArchivo => console.log(nombreArchivo,'creado'))
  .catch(err=>console.log(err));

    
