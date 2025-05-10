<?php
require 'db.php';

$data = json_decode(file_get_contents("php://input"));
$username = $conn->real_escape_string($data->username);
$password = hash('sha256', $data->password);

$result = $conn->query("SELECT * FROM users WHERE username='$username' AND password='$password'");
echo json_encode(["success" => $result->num_rows > 0]);
?>
