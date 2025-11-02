const http = require("http");
const fs = require("fs");
const UserForm=require('./UserForm');
const UserSubmit=require('./UserSubmit');
const querystring = require("querystring");

http.createServer((req, res) => {

res.writeHead(200,{"content-type":"text/html"})
if(req.url==="/"){
UserForm(req,res)
}
else   if (req.url === "/submit" && req.method === "POST") {
  UserSubmit(req,res);
  return;
}
res.writeHead(200,{"content-type":"text/html"})

res.end();

}).listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
