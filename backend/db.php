<?php
$host = 'sqlXXX.infinityfree.com';
$user = 'epiz_XXXXXXX';
$pass = 'your_db_password';
$dbname = 'epiz_XXXXXXX_yourdb';

$conn = new mysqli($host, $user, $pass, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
