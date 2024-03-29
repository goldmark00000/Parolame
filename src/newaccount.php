<?php
echo '<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./styles/palette.css">
  <link rel="stylesheet" href="./styles/cookie.css">
  <link rel="stylesheet" href="./styles/newaccount.css">
  <script src="./scripts/cookie.js" defer></script>
  <script src="./scripts/newaccount.js" defer></script>
  <title>Parolame</title>
</head>
<body>
  <div class="background">
  <img class="logo" src="./img/logo.png" alt="Parolame" loading="lazy">
    <div class="new-account-container">
      <div class="elements-container">
        <div class="text-container">
          <span class="text-input" id="displayPassword">
            <label for="password" class="label-password-user">Password:</label>
            <input type="password" class="password-user" id="password"></input>
          </span>
          <span class="text-input" id="displayConfirmPassword">
            <label for="confirmPassword" class="label-confirm-password-user">Confirm password:</label>
            <input type="password" class="confirm-password-user" id="confirmPassword"></input>
          </span>
          <span class="id-player-container">
            Your ID:<br><span class="id-player-display" id="idPlayerShow"></span>
          </span>
        </div>
        <span class="btns-space">
          <button class="new-account-btn cancel-btn">Cancel</button>
          <button class="new-account-btn confirm-btn">Confirm</button>
        </span>
      </div>
      <a href="./login.php" class="link-login-acc">Do you have an account? Click here</a>
    </div>
  </div>
  <div class="cookie-background">
    <div class="cookie-popup">
      <p class="cookie-title">This site use cookies</p>
      <div class="cookie-text-space">
        <span class="cookie-text">
          <!-- /////////////////////////////////// -->
          
        </span>
      </div>
      <div class="cookie-btn-space">
        <span class="cookie-btn deny-btn">Deny cookies</span>
        <span class="cookie-btn accept-btn">Allow cookies</span>
      </div>
    </div>
  </div>
</body>
</html>';