<?php
if (!file_exists("./php/Subject.php")) exit();
if (!file_exists("./php/create_account.php")) exit();

if (!isset($_COOKIE["ID_user"])) {
    echo "sei nuovo";
    $name = "ID_user";
    $value = "fff123";
    setcookie($name, $value);
    // header("Location: http://localhost/Parolame/src/php/create_account.php");
    exit();
}

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