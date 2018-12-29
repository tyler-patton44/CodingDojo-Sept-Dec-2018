// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/') {
        fs.readFile('index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
        var my_module = require('./my_module');
        my_module.greet();
    }

    else if(request.url === '/stylesheets/style.css') {
        fs.readFile('./stylesheets/style.css', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/car1.gif') {
        fs.readFile('./images/car1.gif', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/gif'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/car2.gif') {
        fs.readFile('./images/car2.gif', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/gif'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/car3.gif') {
        fs.readFile('./images/car3.gif', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/gif'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/cat1.gif') {
        fs.readFile('./images/cat1.gif', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/gif'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/cat2.gif') {
        fs.readFile('./images/cat2.gif', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/gif'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/cat3.gif') {
        fs.readFile('./images/cat3.gif', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/gif'});
            response.write(contents);
            response.end();
        });
    }

    else if(request.url === '/cats') {
        fs.readFile('cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }

    else if(request.url === '/cars/new') {
        fs.readFile('newCar.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }

    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");