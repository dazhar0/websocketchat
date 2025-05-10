<?php
require 'db.php';

$data = json_decode(file_get_contents("php://input"));
$username = $conn->real_escape_string($data->username);
$message = $conn->real_escape_string($data->message);

$conn->query("INSERT INTO messages (username, message) VALUES ('$username', '$message')");
?>
