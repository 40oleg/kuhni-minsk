<?php header('Content-type: text/plain; charset=utf-8');?>
<?php

require 'config.php';

$to = $email;
$subject = 'Новый заказ.';
$message =  'Номер телефона: ' . $_POST[number] ."\n" .
            'Выберите планировку кухни: ' . $_POST[questions][0] ."\n" .
            'Выберите материал фасадов: ' . $_POST[questions][1] ."\n" .
            'Выберите тип фурнитуры: ' . $_POST[questions][2] ."\n" .
            'На какой бюджет рассчитываете? ' . $_POST[questions][3] ."\n" .
            'Когда вы планируете установку кухни? ' . $_POST[questions][4] ."\n" .
            'Выберите Ваш подарок к заказу? ' . $_POST[questions][5] ."\n" .
            'Как Вам удобнее получить результат? ' . $_POST[questions][6] ."\n";
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