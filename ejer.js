
const servidor = require('http');

const server = servidor.createServer((req, resp)=>{
    if(req.method == 'POST'){
        let body = '';
        req.on('data', (chunk)=>{
            body+= chunk;
        });

        req.on('end', ()=>{
            console.log(body)
        })
    }
    else{
        resp.setHeader('Content-Type', 'text/html');
        resp.end(`<form method="POST>
                    <input type= "text"
                    name="num1"/>
                    <br/>
                    <input type= "text"
                    name="num2"/>
                    <br/>
                    <button>Calcular</button>
                   </form>`)
    }
})