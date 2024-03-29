<?php
require_once("../lib/php/Homescript.php");

echo '<!DOCTYPE html>
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
  <div class="no" id="fakeInputLetters">';


    for ($i = 0; $i < $wordLength; $i++) {
      echo "<game-box><letter data-letter-input=\"0\"></letter></game-box>";
    }


  echo '</div>
  <header>
    <nav>
      <span class="player-id" id="idPlayer">ACCOUNT: ';
       echo $userId;
       echo '</span>
      <span class="nav-btn" id="fullChangeModeBtn">
        Mode: <span class="change-mode" id="changeModeBtn" data-mode="0">normale</span>
      </span>
      <span class="nav-btn stats" id="statsBtn">
        stats
      </span>
      <span class="nav-btn rules" id="rulesBtn" data-active="0">
        rules
      </span>
      <span class="nav-btn disconnect" id="disconnectBtn">
        <img src="./img/arrow.svg" alt="disconnect" loading="lazy">
      </span>
    </nav>
  </header>
  <main>
    <div class="rules-container">
    <h1>Rules of the game</h1>
      <p class="wrap-text">
        In questo gioco hai 5 tentativi per indovinare la parola.
        Questa parola viene scelta in base alla materia che cambia ogni giorno.
        Se si riesce a indovinare la parola entro i 5 tentativi avrai vinto e inizirà la tua streak di win.
        Se una volta non riuscirai ad indovinare la parola perderai la tua win streak.
        Questo gioco mira a fare conoscere nuove parole alle persone.
      </p>
    </div>
    <img class="logo" src="./img/logo.png" alt="Parolame" loading="lazy">
    <p class="materia" id="idMateria">The subject of today is
      <span class="materia-text">';
      
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
    
    
    echo '</span></p>';

    if ($winner != true) {
      echo "<span class=\"attempts\">Remain attempts: <span id=\"nAttemptsRemaing\">";
      echo $userAttempts;
      echo "</span></span>";
      echo "<script>
      const userAttempt = document.getElementById(\"nAttemptsRemaing\");
      if (parseInt(userAttempt.textContent) > 3) {
        userAttempt.classList.add(\"green\");
      } else if (parseInt(userAttempt.textContent) > 1) {
        userAttempt.classList.add(\"yellow\");
      } else {
        userAttempt.classList.add(\"red\");
      };
      </script>";
    }
    else {
      echo "<span class=\"winner\">You won for today, see you tomorrow!</span>";
    }

    echo '<game id="">';

      for ($i = 0; $i < $wordLength; $i++) {
        echo "<game-box
        class= \"\"
        ><letter data-letter-input=\"0\"></letter></game-box>";
      }


    echo '</game>
    <div>
      <button class="confirm-btn" id="confirmWord">Confirm</button>
    </div>
    <div class="letters-used">
      Letters in the wrong spot:
      <game id="lettersWrongSpot">
      </game>
      Missing letters:
      <game id="lettersMissed">
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
        <div class="keys-btn canc-btn" data-info="canc"><img src="./img/delete.svg" alt="canc" loading="lazy"></div>
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
</body>

</html>';
