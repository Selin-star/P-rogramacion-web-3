new Promise((resolve) => resolve(2))
    .then(num => num * 2)
    .then(num => num + 5)
    .then(resultado => console.log(resultado)); 
