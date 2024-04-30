
const servidor = require('http');

const server = servidor.createServer((req, resp)=>{
    if(req.method == 'POST'){
        let body = '';
        req.on('data', (chunk)=>{
            body+= chunk;
        });

        req.on('end', ()=>{
            let arrayNum = body.split('&');
            console.log(arrayNum);
            let num1 = arrayNum[0].split('=')[1];
            console.log(num1);
            let num2 = arrayNum[1].split('=')[1];
            
            let num = parseInt(num1);
            let numdos = parseInt(num2);
            let suma =  num + numdos;

            resp.end('R1 = '+ suma);
            return;
        })
    }
    else{
        resp.setHeader('Content-Type', 'text/html');
        resp.end(`<form method="POST">
                    <input name="num1" type="number"/>
                    <br/>
                    <br/>
                    <input name="num2" type="number"/>
                    <br/>
                    <br/>
                    <button>Calcular</button>
                   </form>`)
    }
})

server.listen(5001);