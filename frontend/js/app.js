const ws = new WebSocket("wss://your-render-url.onrender.com");

ws.onmessage = (msg) => {
  const data = JSON.parse(msg.data);
  // Update UI
};

function sendMessage(username, message) {
  ws.send(JSON.stringify({ username, message }));
  fetch("send_message.php", {
    method: "POST",
    body: JSON.stringify({ username, message }),
  });
}
