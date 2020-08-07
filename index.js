
let socket;

function connect() {
    // socket = io.connect();
    socket = io.connect("http://localhost:3000");

    // Registering to a "msg-from-server" event: 
    socket.on("msg-from-server", msg => {
        alert(msg);
    });
}

function sendSomething() {
    // Sending something to a specific event on server side: 
    const d = new Date();
    socket.emit("msg-from-client", "Hello! I'm your client. Time: " + d.toLocaleTimeString());
}

function disconnect() {
    // Disconnect from server: 
    socket.disconnect();
}