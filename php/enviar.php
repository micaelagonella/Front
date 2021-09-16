<?php
$name = $_POST['name'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$mensaje = $_POST['mensaje'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";




$para = 'micaelagonella@hotmail.com'

mail($para, $header);
header("Location: index.html");

?>