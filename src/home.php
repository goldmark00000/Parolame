<?php
require_once("../lib/php/Homescript.php");
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./styles/palette.css">
  <link rel="stylesheet" href="./styles/index.css">
  <link rel="stylesheet" href="./styles/game.css">
  <link rel="stylesheet" href="./styles/cookie.css">
  <script src="./scripts/cookie.js" defer></script>
  <script src="./scripts/index.js" defer></script>
  <script src="./scripts/game.js" defer></script>
  <script src="./scripts/keyboard.js" defer></script>
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
      <span class="player-id" id="idPlayer">ACCOUNT: <?php echo $userId;?></span>
      <span class="nav-btn" id="fullChangeModeBtn">
        Mode: <span class="change-mode" id="changeModeBtn" data-mode="0">normale</span>
      </span>
      <!-- <span class="nav-btn stats" id="statsBtn">
        stats
      </span> -->
      <span class="nav-btn rules" id="rulesBtn" data-active="0">
        rules
      </span>
      <span class="nav-btn disconnect" id="disconnectBtn">
        <img src="./img/arrow.svg" alt="disconnect" loading="lazy">
      </span>
    </nav>
  </header>
  <main>
    <!-- <div class="rules-container">
      <p class="wrap-text">

        Insert the rules

      </p>
    </div> -->
    <img class="logo" src="./img/logo.png" alt="Parolame" loading="lazy">
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
    <script>
      const userAttempt = document.getElementById("nAttemptsRemaing");
      if (parseInt(userAttempt.textContent) > 3) {
        userAttempt.classList.add("green");
      } else if (parseInt(userAttempt.textContent) > 1) {
        userAttempt.classList.add("yellow");
      } else {
        userAttempt.classList.add("red");
      };
    </script>
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
        <!-- <game-box>
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
        </game-box> -->
      </game>
      Letters in the wrong spot:
      <game id="gameBoard lettersWrongSpot">
        <game-box>
          <letter data-wrong-spot-letter></letter>
        </game-box>
        <!-- <game-box>
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
        </game-box> -->
      </game>
      Missing letters:
      <game id="gameBoard lettersMissed">
        <game-box>
          <letter data-missed-letter></letter>
        </game-box>
        <!-- <game-box>
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
        </game-box> -->
      </game>
    </div>
  </main>
  <div class="keyboard-box">
    <div class="keyboard-btn"><img src="./img/triangle.png" alt="tringle" loading="lazy"></div>
    <div class="keyboard-container">
      <div class="row">
        <div class="keys-btn" data-info="q">q</div>
        <div class="keys-btn" data-info="w">w</div>
        <div class="keys-btn" data-info="e">e</div>
        <div class="keys-btn" data-info="r">r</div>
        <div class="keys-btn" data-info="t">t</div>
        <div class="keys-btn" data-info="y">y</div>
        <div class="keys-btn" data-info="u">u</div>
        <div class="keys-btn" data-info="i">i</div>
        <div class="keys-btn" data-info="o">o</div>
        <div class="keys-btn" data-info="p">p</div>
        <div class="keys-btn canc-btn" data-info="canc"><img src="./img/delete.svg"></div>
      </div>
      <div class="row">
        <div class="keys-btn" data-info="a">a</div>
        <div class="keys-btn" data-info="s">s</div>
        <div class="keys-btn" data-info="d">d</div>
        <div class="keys-btn" data-info="f">f</div>
        <div class="keys-btn" data-info="g">g</div>
        <div class="keys-btn" data-info="h">h</div>
        <div class="keys-btn" data-info="j">j</div>
        <div class="keys-btn" data-info="k">k</div>
        <div class="keys-btn" data-info="l">l</div>
      </div>
      <div class="row">
        <div class="keys-btn" data-info="z">z</div>
        <div class="keys-btn" data-info="x">x</div>
        <div class="keys-btn" data-info="c">c</div>
        <div class="keys-btn" data-info="v">v</div>
        <div class="keys-btn" data-info="b">b</div>
        <div class="keys-btn" data-info="n">n</div>
        <div class="keys-btn" data-info="m">m</div>
      </div>
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
  <div class="rules-container">
    <h1>Rules of the game</h1>
    <p>aaaaaaaaaa a a a a  aa a a  a a  aa  a a a a a aaaaaaaaaa a a a a  aa a a  a a  aa  a a a a a aaaaaaaaaa a a a a  aa a a  a a  aa  a a a a a aaaaaaaaaa a a a a  aa a a  a a  aa  a a a a a aaaaaaaaaa a a a a  aa a a  a a  aa  a a a a a aaaaaaaaaa a a a a  aa a a  a a  aa  a a a a a </p>
  </div>
</body>

</html>