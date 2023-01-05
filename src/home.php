<?php
require_once("./lib/php/Homescript.php");
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./src/styles/palette.css">
  <link rel="stylesheet" href="./src/styles/index.css">
  <link rel="stylesheet" href="./src/styles/game.css">
  <link rel="stylesheet" href="./src/styles/cookie.css">
  <script src="./src/scripts/cookie.js" defer></script>
  <script src="./src/scripts/index.js" defer></script>
  <script src="./src/scripts/game.js" defer></script>
  <title>Parolame</title>
</head>

<body>
  <div class="no" id="fakeInputLetters">
    <letter data-letter-input></letter>
    <letter data-letter-input></letter>
    <letter data-letter-input></letter>
    <letter data-letter-input></letter>
    <letter data-letter-input></letter>
  </div>
  <header>
    <nav>
      <span class="" id="idPlayer"></span>
      <span class="nav-btn">
        Mode:
        <span class="change-mode" id="changeModeBtn">easy</span>
      </span>
      <span class="nav-btn stats" id="statsBtn">
        stats
      </span>
      <span class="nav-btn rules" id="rulesBtn">
        rules
      </span>
    </nav>
  </header>
  <main>
    <div class="rules-container">
      <p class="wrap-text">
        <!-- Insert the rules  -->
      </p>
    </div>
    <img class="logo" src="./src/img/logo.png" alt="Parolame">
    <p class="materia" id="idMateria">The subject of today is
      <span class="materia-text"><?php
                                  require_once($pathFiles[0]);
                                  $subject;
                                  try {
                                    $sbj = new Subject();
                                    $subject = $sbj->getSubject();
                                  } catch (Exception $e) {
                                    echo $e;
                                    exit();
                                  }
                                  echo $subject;
                                  ?></span>
    </p>
    <span class="attempts">Remain attempts: <span id="nAttemptsRemaing"><?php
                                                                        echo $userAttempts;
                                                                        
                                                                        ?></span></span>
    <game id="gameBoard">
      <game-box>
        <letter data-letter-input></letter>
      </game-box>
      <game-box>
        <letter data-letter-input></letter>
      </game-box>
      <game-box>
        <letter data-letter-input></letter>
      </game-box>
      <game-box>
        <letter data-letter-input></letter>
      </game-box>
      <game-box>
        <letter data-letter-input></letter>
      </game-box>
    </game>
    <div>
      <button class="confirm-btn" id="confirmWord">Confirm</button>
    </div>
    <div class="letters-used">
      Letters in the right place:
      <game id="gameBoard lettersRights">
        <game-box>
          <letter data-right-letter></letter>
        </game-box>
        <game-box>
          <letter data-right-letter></letter>
        </game-box>
        <game-box>
          <letter data-right-letter></letter>
        </game-box>
        <game-box>
          <letter data-right-letter></letter>
        </game-box>
        <game-box>
          <letter data-right-letter></letter>
        </game-box>
      </game>
      Letters in the wrong spot:
      <game id="gameBoard lettersWrongSpot">
        <game-box>
          <letter data-wrong-spot-letter></letter>
        </game-box>
        <game-box>
          <letter data-wrong-spot-letter></letter>
        </game-box>
        <game-box>
          <letter data-wrong-spot-letter></letter>
        </game-box>
        <game-box>
          <letter data-wrong-spot-letter></letter>
        </game-box>
        <game-box>
          <letter data-wrong-spot-letter></letter>
        </game-box>
      </game>
      Missing letters:
      <game id="gameBoard lettersMissed">
        <game-box>
          <letter data-missed-letter></letter>
        </game-box>
        <game-box>
          <letter data-missed-letter></letter>
        </game-box>
        <game-box>
          <letter data-missed-letter></letter>
        </game-box>
        <game-box>
          <letter data-missed-letter></letter>
        </game-box>
        <game-box>
          <letter data-missed-letter></letter>
        </game-box>
      </game>
    </div>
  </main>
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

</html>