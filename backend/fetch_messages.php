<?php
require 'db.php';

$result = $conn->query("SELECT username, message, created_at FROM messages ORDER BY created_at DESC LIMIT 50");
$messages = [];
while ($row = $result->fetch_assoc()) {
    $messages[] = $row;
}
echo json_encode($messages);
?>
