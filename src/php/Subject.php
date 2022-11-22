<?php
    class Subject{
        public function getSubject(){
            $date = getdate($_SERVER["REQUEST_TIME"]);
            $subject="";
            switch ($date["wday"]) {
                case 0:
                    $subject="matematica";
                    break;
                case 1:
                    $subject="italiano";
                    break;
                case 2:
                    $subject="geografia";
                    break;
                case 3:
                    $subject="storia";
                    break;
                case 4:
                    $subject="informatica";
                    break;
                case 5:
                    $subject="diritto";
                    break;
                case 6:
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