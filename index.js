function testNumeros(n) {
    if(n===1 || n===0) {
        return 'Estos números son neutros';
    } else if(n===2) {
        return n + ' Es primo';
    } else {
        for(var i=2; i<n; i++) {
            if(n%i===0) {
                return n + ' Es entero';
            }
        }
        return n + ' Es primo';
    };
};

// Invoco a la función en el ámbito global dentro de un console log para ver los resultados.

console.log(testNumeros(0));