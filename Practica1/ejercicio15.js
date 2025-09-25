function callbackToPromesa(fn) {
    return new Promise((resolve, reject) => {
        fn((err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
}

function miCallback(cb) {
    setTimeout(() => cb(null, "Datos desde callback"), 2000);
}

callbackToPromesa(miCallback)
    .then(res => console.log(res));
