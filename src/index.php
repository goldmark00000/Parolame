<?php

class MyDB extends SQLite3
{
    function __construct()
    {
        $this->open('parolame.db');
    }
}
$db = new MyDB();
if (!$db) {
    echo $db->lastErrorMsg();
}



?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Parolame</title>
</head>

<body>

</body>

</html>