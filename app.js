
var fs = require('fs');

// syncnorize
// var readMe = fs.readFileSync('readMe.txt', 'utf8');

// fs.writeFileSync('writeMe.txt', readMe);



// async
// fs.readFile('readMe.txt', 'utf8', (err, data)=>{
//     console.log(data);
    
// });

// fs.readFile('readMe.txt', 'utf8', (err, data)=>{
    
//     fs.writeFile('writeMe5.txt', data, (err, data)=>{
//         console.log('new file created');

//     });

// });


//delete a file
fs.unlink('writeMe3.txt', ()=>{
    console.log(' file deleted');
});