<?php

$settings = json_decode(file_get_contents('settings.json'),true); 

$host=$settings["host"];
$user=$settings["user"];
$password=$settings["password"];


?>