//antes
setTimeout(() => {
    console.log("Primero");
    setTimeout(() => {
        console.log("Segundo");
        setTimeout(() => {
            console.log("Tercero");
        }, 1000);
    }, 1000);
}, 1000);
// despues
function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function ejecutar() {
    await esperar(1000);
    console.log("Primero");
    await esperar(1000);
    console.log("Segundo");
    await esperar(1000);
    console.log("Tercero");
}
ejecutar();
