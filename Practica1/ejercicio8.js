function ejecutarCallback(callback) {
    setTimeout(() => {
        callback("Ejecutado después de 2 segundos");
    }, 2000);
}

ejecutarCallback((msg) => console.log(msg));
