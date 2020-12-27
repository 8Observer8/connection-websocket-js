
function main()
{
    // const socket = new WebSocket("ws://localhost:3000");
    const socket = new WebSocket("wss://connection-websocket-js.herokuapp.com");

    const output = document.getElementById("output");
    output.innerHTML = "Please, wait for connection..."

    socket.onopen = () =>
    {
        const message = "Client was connected to server";
        console.log(message);
        output.innerHTML = message;
    };
}

window.onload = main();
