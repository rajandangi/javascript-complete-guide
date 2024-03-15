const fs = require('fs');

fs.writeFile('hello-data.txt', 'username=RajanDangi', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('File written successfully');
});

fs.readFile('hello-data.txt', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data.toString());
});