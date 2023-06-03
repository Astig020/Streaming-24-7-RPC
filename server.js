const express = require('express')
const server = express();

server.all("/", (req, res) => {
  res.send('<meta http-equiv="refresh" content="0; URL=https://dcalive2023.onrender.com"/>')
})

function keepAlive() {
  server.listen(3000, () => {
    console.log("Server is ready!" + Date.now());

  })
}
module.exports = keepAlive
