const WebSocket = require("ws");
const PORT = process.env.PORT || 8080;
const wss = new WebSocket.Server({ port: PORT });

console.log(`WebSocket server running on port ${PORT}`);

wss.on("connection", (ws) => {
  console.log("Client connected. Total clients:", wss.clients.size);

  ws.on("message", (message) => {
    console.log("Received:", message.toString());

    // Broadcast message to all connected clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on("close", () => {
    console.log("Client disconnected. Total clients:", wss.clients.size);
  });

  ws.on("error", (error) => {
    console.error("WebSocket error:", error.message);
  });
});
