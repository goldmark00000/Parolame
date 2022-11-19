<?php

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles/palette.css">
    <link rel="stylesheet" href="./styles/login.css">
    <script src="./scripts/login.js" defer></script>
    <title>Parolame</title>
</head>

<body>
    <div class="background">
        <div class="login-container">
            <div class="elements-container">
                <div class="text-container">
                    <span class="text-input">
                        <label for="idUser" class="for-id-user">Nome utente:</label>
                        <input type="text" class="id-user" id="idUser"></input>
                    </span>
                    <span class="text-input">
                        <label for="passwordUser" class="for-password-user">Password:</label>
                        <input type="password" class="password-user" id="passwordUser"></input>
                    </span>
                </div>
                <span class="buttons-space">
                    <button class="login-button cancel-button">Cancel</button>
                    <button class="login-button confirm-button">Confirm</button>
                </span>
            </div>
            <p class="link-create-acc">Vuoi creare un nuovo account?</p>
        </div>
    </div>
</body>

</html>