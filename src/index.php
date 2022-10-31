<?php
if (!isset($_COOKIE["ID_user"])) {
    echo "sei nuovo";
    $name = "ID_user";
    $value = "fff123";
    setcookie($name, $value);
    // header("Location: http://localhost/Parolame/src/php/create_account.php");
    exit();
}
    
    require("./php/getdate.php");
    echo $_SESSION["subject"];
    session_unset();
    session_destroy();



?>

<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Parolame</title>
    <script src="index.js"></script>
    <link rel="stylesheet" href="index.css">
</head>

<body>

</body>

</html>