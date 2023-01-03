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
    <img class="logo" src="./img/logo.png" alt="Parolame">
    <div class="login-container">
      <div class="elements-container">
        <div class="text-container">
          <span class="text-input">
            <label for="idUser" class="label-id-user">ID utente:</label>
            <input type="text" class="id-user" id="idUser"></input>
          </span>
          <span class="text-input">
            <label for="passwordUser" class="label-password-user">Password:</label>
            <input type="password" class="password-user" id="passwordUser"></input>
          </span>
        </div>
        <span class="btns-space">
          <button class="login-btn cancel-btn">Cancel</button>
          <button class="login-btn confirm-btn">Confirm</button>
        </span>
      </div>
      <a href="./newaccount.php" class="link-create-acc">Do you want create a new account?</a>
    </div>
  </div>
</body>
</html>