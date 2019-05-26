
var fs = require('fs');

// // syncnorize

// //creating directory
// fs.mkdirSync('stuff');

// //removing directory
// fs.rmdirSync('stuff');


// // async
fs.mkdir('stuff', ()=>{
    fs.readFile('readMe.txt', (err, data)=>{
        fs.writeFile('./stuff/writeMe.txt', data, ()=>{
            console.log('file write complete');
            
        });
    });
});


// //empty the directory
// fs.unlink('./stuff/writeMe.txt', ()=>{
//     fs.rmdir('stuff', () => {
//         console.log(' directory deleted');
//     });
// });



// //delete a file
// fs.unlink('writeMe5.txt', ()=>{
//     console.log(' file deleted');
// });