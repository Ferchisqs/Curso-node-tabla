const fs = require('fs');
const colors= require('colors')

const crearArchivo= async(base=5 ,listar=false,hasta=10) =>{


    let salida,consola = '';

     

    for(let i = 1; i<hasta+1;i++){
        salida += (`${base} x ${i}= ${base*i}\n`);
        consola += (`${base} x ${i}= ${base*i}\n`.green);


    }

    if (listar) {
      console.log('====================='.rainbow)
      console.log('   Table del:   ',base)
      console.log('====================='.rainbow)
      console.log(consola);
     
    }
    fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
    console.log('Archivo creado');

    return `tabla-${base}.txt`;
  }
   
       

      
   

module.exports = {
crearArchivo: crearArchivo
} 