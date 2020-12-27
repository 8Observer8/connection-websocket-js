
function main()
{
    // const socket = new WebSocket("ws://localhost:3000");
    const socket = new WebSocket("wss://connection-websocket-js.herokuapp.com");

    socket.onopen = () =>
    {
        console.log("Client was connected to server");
    };
}

window.onload = main();
