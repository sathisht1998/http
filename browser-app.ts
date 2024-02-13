const http = require('http');



const { readFileSync } =require('fs');

const homepage = readFileSync('./index.html')
const homestyles = readFileSync('./styles.css')
const homelogo = readFileSync('./logo.svg')
const homelogic = readFileSync('./browser-app.ts')


const server = http.createServer((req:any ,res:any) =>{
    const url = req.url
    if (url === "/"){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homepage);
        res.end();
    }else if (url === "/about"){
        res.writeHead(200, {'contenttype': 'text/html'})
        res.write('berify introduction');
        res.end();
    }
    else if (url === "/styles.css"){
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(homestyles);
        res.end();
    }
    else if (url === "/logo.svg"){
        res.writeHead(200, {'content-type': 'image/svg+xml'})
        res.write(homelogo);
        res.end();
    }
    else if (url === "/broswer-app.ts"){
        res.writeHead(200, {'content-type': 'text/typescript'})
        res.write(homelogo);
        res.end();
    }
    else{
        res.writeHead(400, {'content-type': 'text/html'})
        res.write('page not found');
        res.end();
    }

})

server.listen(9009, () => {
    console.log('server is running on port ');
    
});


