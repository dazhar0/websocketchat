<?php
require 'db.php';

$data = json_decode(file_get_contents("php://input"));
$username = $conn->real_escape_string($data->username);
$password = hash('sha256', $data->password);

if ($conn->query("INSERT INTO users (username, password) VALUES ('$username', '$password')")) {
    echo json_encode(["success" => true]);
} else {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => $conn->error]);
}
?>
