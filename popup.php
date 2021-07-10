<?php header('Content-type: text/plain; charset=utf-8');?>
<?php

require 'config.php';

$to = $email;
$subject = 'Запрос на звонок.';
$message = 'Телефон: ' . $_POST[number] ."\n" .
$headers = 'From: Master Remont' . "\r\n" .
           'Reply-To: Master Remont' . "\r\n" ;

mail($to, $subject, $message, $headers);

if (mail($recipient, $subject, $message, $headers))
{
    echo "Message accepted to".$to;
}
else
{
    echo "Error: Message not accepted";
}