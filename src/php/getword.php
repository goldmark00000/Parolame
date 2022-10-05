<?php

$host = "localhost";
$user = "username";
$password = "password";


$conn = new mysqli($host, $user, $password);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


?>