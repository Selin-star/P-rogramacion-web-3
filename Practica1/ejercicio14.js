function miPromesa() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Éxito desde promesa");
        //probamos el error con reject 
        }, 2000);
    });
}

function promesaToCallback(promesa, callback) {
    promesa
        .then(res => callback(null, res))
        .catch(err => callback(err));
}

promesaToCallback(miPromesa(), (err, res) => {
    if (err) console.error(err);
    else console.log("Callback:", res);
});
