<?php
session_start();

$date = getdate($_SERVER["REQUEST_TIME"]);
switch ($date["wday"]) {
    case 1:
        $_SESSION["subject"]="matematica";
        break;
    case 2:
        $_SESSION["subject"]="italiano";
        break;
    case 3:
        $_SESSION["subject"]="geografia";
        break;
    case 4:
        $_SESSION["subject"]="storia";
        break;
    case 5:
        $_SESSION["subject"]="informatica";
        break;
    case 6:
        $_SESSION["subject"]="diritto";
        break;
    case 7:
        $_SESSION["subject"]="economia aziendale";
        break;
    default:
        exit();
        break;
}

?>