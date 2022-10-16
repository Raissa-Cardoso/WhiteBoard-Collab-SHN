const express= require("express")
var app = express();
var http = require('http').createServer(app);
const fs = require('fs')
const multer = require("multer")
const upload = multer({ dest: "./uploads/" });

app.use(express.static('./uploads/'))

var io = require('socket.io')(http, {
    cors: {
        origin: ["http://localhost:3000", "http://localhost:5000"],
        methods: ["GET", "POST", "PUT"],

        credentials: true

    }
}, {
    allowEIO3: true // false by default
});

var server_port = 5000;
http.listen(server_port, () => {
    console.log("Started on : " + server_port);
})
