<?php

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles/login.css">
    <script src="./scripts/login.js" defer></script>
    <title>Parolame</title>
</head>

<body>
    <div class="login-container">
        <div class="elements-container">
            <div class="text-container">
                <span>
                    <label class="" for="idUser">Nome utente:</label>
                    <input type="text" class="id-user" id="idUser"></input>
                </span>
                <span>
                    <label class="" for="passwordUser">Password:</label>
                    <input type="password" class="password-user" id="passwordUser"></input>
                </span>
            </div>
            <button class="confirm-button"></button>
        </div>
        <p class="link-create-acc">Vuoi creare un nuovo account?</p>
    </div>
</body>

</html>