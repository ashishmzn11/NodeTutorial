const querystring = require("querystring");

function UserSubmit(req, res) {
  let dataBody = [];

  req.on("data", (chunk) => {
    dataBody.push(chunk);
  });

  req.on("end", () => {
    let rawData = Buffer.concat(dataBody).toString();
    let readableData = querystring.parse(rawData);

    let dataString = `My name is ${readableData.name} and my email is ${readableData.email}`;

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>${dataString}</h1>`); // ✅ Only one final response
  });
}

module.exports = UserSubmit;
