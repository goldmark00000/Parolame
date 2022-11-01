<?php

if (!file_exists("./php/Subject.php")) exit();

require_once("./php/Subject.php");
$subject;
try {
    $sbj = new Subject();
    $subject = $sbj->getSubject();
} catch (Exception $e) {
    echo $e;
    exit();
}
echo $subject;

$host = "localhost";
$user = "root";
$password = "";


$connection = new mysqli($host, $user, $password);

?>