<?php
$host = 'your_host'; $user = 'your_user'; $pass = 'your_pass'; $db = 'your_db';
$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) die('Connection failed: ' . $conn->connect_error);