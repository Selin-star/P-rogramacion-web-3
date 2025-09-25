function miPromesa() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Éxito después de 3 segundos");
            // o prueba con: reject("Ocurrió un error");
        }, 3000);
    });
}

//antes
miPromesa()
    .then(r => console.log(r))
    .catch(err => console.error(err));
//despues
async function usarPromesa() {
    try {
        const resultado = await miPromesa();
        console.log(resultado);
    } catch (error) {
        console.error(error);
    }
}
usarPromesa();
