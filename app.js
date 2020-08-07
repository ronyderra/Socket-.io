const express = require("express");
const socketIO = require("socket.io");

// Creating express server: 
const server = express();

// Expose index.html: 
server.use(express.static(__dirname));

// Serving express server - uploading it to the air, but getting back a listener object: 
const listener = server.listen(3000, () => console.log("Listening on http://localhost:3000"));

// Creating the socket.io server on top of express listener: 
const socketServer = socketIO(listener);

// Registering to a "connection" event: 
socketServer.sockets.on("connection", socket => {
    
    console.log("Client has been connected.");

    // Listening to a "msg-from-client" event: 
    socket.on("msg-from-client", msg => {

        console.log("Client message: " + msg);

        setTimeout(() => {

            // Sending a message to the client: 
            socket.emit("msg-from-server", "I've got your message: " + msg);

        }, 3000);

    });

    // Listening to a "disconnect" event: 
    socket.on("disconnect", () => {
        console.log("Client has been disconnected.");
    });

});


