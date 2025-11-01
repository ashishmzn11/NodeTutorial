const http=require('http');
http.createServer((req,reap)=>{
  resp.write("<h1>ASHISH</h1>");
  resp.end("end");
}).listen(3000)