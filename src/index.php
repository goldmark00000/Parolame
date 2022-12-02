<?php
$pathFiles = array("./php/Subject.php", "./php/create_account.php");
$pathFilesLength = count($pathFiles);
for ($i = 0; $i < $pathFilesLength; $i++) {
    if (!file_exists($pathFiles[$i])) {
        echo "File not found! " . $pathFiles[$i];
        exit();
    }
}



// if (!isset($_COOKIE["ID_user"])) {
//     echo "sei nuovo";
//     $name = "ID_user";
//     $value = "fff123";
//     setcookie($name, $value);
//     // header("Location: http://localhost/Parolame/src/php/create_account.php");
// }

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
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Parolame</title>
    <link rel="stylesheet" href="./styles/palette.css">
    <link rel="stylesheet" href="./styles/index.css">
    <link rel="stylesheet" href="./styles/game.css">
    <script src="./scripts/index.js" defer></script>
    <script src="./scripts/game.js" defer></script>
</head>

<body>
    <header>
        <nav>
            <span class="" id="idPlayer"></span>
            <span class="nav-btn stats">
                stats
            </span>
            <span class="nav-btn rules">
                rules
            </span>
        </nav>
    </header>
    <main>
        <div class="rules-container">
            <p>

            </p>
        </div>
        <img class="logo" src="./img/logo.png" alt="Parolame logo">
        <p class="materia" id="idMateria"></p>
        <game id="gameBoard">
            <game-box>
                <letter data-row="1"></letter>
            </game-box>
            <game-box>
                <letter data-row="1"></letter>
            </game-box>
            <game-box>
                <letter data-row="1"></letter>
            </game-box>
            <game-box>
                <letter data-row="1"></letter>
            </game-box>
            <game-box>
                <letter data-row="1"></letter>
            </game-box>
            <game-box>
                <letter data-row="1"></letter>
            </game-box>
            <game-box>
                <letter data-row="2"></letter>
            </game-box>
            <game-box>
                <letter data-row="2"></letter>
            </game-box>
            <game-box>
                <letter data-row="2"></letter>
            </game-box>
            <game-box>
                <letter data-row="2"></letter>
            </game-box>
            <game-box>
                <letter data-row="2"></letter>
            </game-box>
            <game-box>
                <letter data-row="2"></letter>
            </game-box>
            <game-box>
                <letter data-row="3"></letter>
            </game-box>
            <game-box>
                <letter data-row="3"></letter>
            </game-box>
            <game-box>
                <letter data-row="3"></letter>
            </game-box>
            <game-box>
                <letter data-row="3"></letter>
            </game-box>
            <game-box>
                <letter data-row="3"></letter>
            </game-box>
            <game-box>
                <letter data-row="3"></letter>
            </game-box>
            <game-box>
                <letter data-row="4"></letter>
            </game-box>
            <game-box>
                <letter data-row="4"></letter>
            </game-box>
            <game-box>
                <letter data-row="4"></letter>
            </game-box>
            <game-box>
                <letter data-row="4"></letter>
            </game-box>
            <game-box>
                <letter data-row="4"></letter>
            </game-box>
            <game-box>
                <letter data-row="4"></letter>
            </game-box>
        </game>
        <div>
            <button class="confirm-btn" id="confirm">Confirm</button>
        </div>
    </main>
</body>

</html>