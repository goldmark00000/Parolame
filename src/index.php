<?php
$pathFiles=array("./php/Subject.php","./php/create_account.php");
$pathFilesLength=count($pathFiles);
for($i=0; $i<$pathFilesLength; $i++){
    if (!file_exists($pathFiles[$i])){
        echo "File not found! ". $pathFiles[$i];
        exit();
    }   
}

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






?>
<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Parolame</title>
    <link rel="stylesheet" href="./styles/index.css">
    <script src="./scripts/index.js" defer></script>
</head>

<body>

</body>

</html>