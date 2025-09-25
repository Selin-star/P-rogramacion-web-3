function miFuncion(arreglo) {
    const obj = { pares: [], impares: [] };
    for (let num of arreglo) {
        if (num % 2 === 0) obj.pares.push(num);
        else obj.impares.push(num);
    }
    return obj;
}

let obj = miFuncion([1,2,3,4,5]);
console.log(obj); 
