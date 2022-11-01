<?php

    class Subject{
        public function getSubject(){
            $date = getdate($_SERVER["REQUEST_TIME"]);
            $subject="";
            switch ($date["wday"]) {
                case 1:
                    $subject="matematica";
                    break;
                case 2:
                    $subject="italiano";
                    break;
                case 3:
                    $subject="geografia";
                    break;
                case 4:
                    $subject="storia";
                    break;
                case 5:
                    $subject="informatica";
                    break;
                case 6:
                    $subject="diritto";
                    break;
                case 7:
                    $subject="economia aziendale";
                    break;
                    default:
                        throw new Exception("Not a day of the week");
                    return;
            }
            return $subject;
        }
    }

?>