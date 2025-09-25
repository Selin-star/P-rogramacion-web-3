function miPromesa() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Éxito después de 2 segundos");
        }, 2000);
    });
}

async function ejecutar() {
    try {
        const r1 = await miPromesa();
        console.log("Primera respuesta:", r1);

        const r2 = await miPromesa();
        console.log("Segunda respuesta:", r2);

        const r3 = await miPromesa();
        console.log("Tercera respuesta:", r3);
    } catch (error) {
        console.error("Error:", error);
    } finally {
        console.log("Proceso finalizado");
    }
}

ejecutar();

