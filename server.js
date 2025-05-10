const WebSocket = require("ws");
const PORT = process.env.PORT || 10000;

const wss = new WebSocket.Server({ port: PORT }, () => {
  console.log(`WebSocket server is running on port ${PORT}`);
});

// Handle each connection
wss.on("connection", (ws) => {
  console.log("New client connected");

  // Handle incoming messages
  ws.on("message", (data) => {
    console.log("Received message:", data.toString());

    // Broadcast message to all other connected clients
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data.toString());
      }
    });
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });

  ws.on("error", (err) => {
    console.error("WebSocket error:", err);
  });
});

// Heartbeat to detect stale connections (optional but good)
setInterval(() => {
  wss.clients.forEach((ws) => {
    if (ws.isAlive === false) return ws.terminate();
    ws.isAlive = false;
    ws.ping();
  });
}, 30000);
