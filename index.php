<?php 

//echo "Hello World1";

require_once __DIR__ . 'vendor/autoload.php';

$inputString = file_getcontents('php://input');
error_log($inputString);

?>
