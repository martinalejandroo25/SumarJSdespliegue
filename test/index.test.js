const sumar = require('../src/index.js');

function assert(condicion, mensaje) {
    if (!condicion) {
        console.error('❌ ' + mensaje);
        process.exit(1);
    }
}

assert(sumar(2, 3) === 5, 'La suma de 2 y 3 debe ser 5');
console.log('✅ Todas las pruebas pasaron con éxito');