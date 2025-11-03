const http=require('http');
const fs=require('fs');

http.createServer((req,res)=>{

  let collectHeaderData = fs.readFileSync("../Html/header.html", 'utf-8');

  let file = "/home";
  if (req.url !== '/') {
      file = req.url;
  }

  if(req.url !=="/Style.css"){
    fs.readFile("../Html" + file + ".html", 'utf-8', (error, data) =>{
      if(error){
        res.writeHead(500,{"content-type":"text/plain"});
        res.end("internal server error");
        return false;
      }
      res.write(collectHeaderData+""+data)
      res.end();
    })
  }

  else if (req.url ==="/Style.css") {
      fs.readFile("../Html/Style.css", 'utf-8', (error, data) => {
          if (error) {
              res.writeHead(500, { "content-type": "text/plain" });
              res.end("css not found");
              return false;
          }

          res.writeHead(200, { "content-type": "text/css" });
          res.end(data);
      });
  }

}).listen(3600 , () => {
  console.log("Server running at http://localhost:3600");
});
