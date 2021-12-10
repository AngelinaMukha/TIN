const http = require("http");
const url = require("url");
const port = 3000;
const server = http.createServer(function(req, res){
    // res.write('Hello from this page!');
    // res.end();
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("Example: http://localhost:3000/add?num1=3&num2=7\n\n");
        res.end();
    }
    const query = url.parse(req.url, true);
    const oper = query.pathname;

    switch(oper) {
        case "/add": {
            //res.write('I am in adding');
            const querydata = query.query;
            const num1 = parseFloat(querydata.num1);
            const num2 = parseFloat(querydata.num2);

            if (num1 && num2) {
                res.writeHead(200, { 'Content-Type': "text/html" });
                res.write(`${num1} + ${num2} = ${num1 + num2}`);
                res.end();
            } else {
                res.writeHead(400, { "Content-Type": "text/html" });
                res.end("Wrong entered parameters");
            }
            
            break;
        }
        case "/sub": {
            const querydata = query.query;
            const num1 = parseFloat(querydata.num1);
            const num2 = parseFloat(querydata.num2);

            if (num1 && num2) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(`${num1} - ${num2} = ${num1 - num2}`);
                res.end();
            } else {
                res.writeHead(400, { "Content-Type": "text/html" });
                res.end("Wrong parameters");
            }
            break;
        }
        case "/mul": {
            const querydata = query.query;
            const num1 = parseFloat(querydata.num1);
            const num2 = parseFloat(querydata.num2);

            if (num1 && num2) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(`${num1} * ${num2} = ${num1 * num2}`);
                res.end();
            } else {
                res.writeHead(400, { "Content-Type": "text/html" });
                res.end("Wrong parameters");
            }
            break;
        }
        case "/div": {
            const querydata = query.query;
            const num1 = parseFloat(querydata.num1);
            const num2 = parseFloat(querydata.num2);

            if (num1 && num2) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(`${num1} / ${num2} = ${num1 / num2}`);
                res.end();
            } else {
                res.writeHead(400, { "Content-Type": "text/html" });
                res.end("Wrong parameters");
            }
            break;
        }
        default: {
            res.writeHead(400, { "Content-Type": "text/html" });
            res.end("Wrong operation");
            break;
        }
    }
});

server.listen(port, function(error){
if(error){
    console.log('Smth is wrong', error);
}else{
    console.log('Server is listening on port '+port);
}
});

console.log("Server running at http://localhost:3000/");