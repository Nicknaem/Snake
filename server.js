const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const port = 3000
const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer);

app.use(express.static("client"))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection',(socker)=>{
    console.log('user connected')
})

httpServer.listen(port, () => {
    console.log('listening on dedashseveci:3000');
})