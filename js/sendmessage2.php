<?php
$sendto   = "stalkersv@gmail.com, e1virus@yandex.ru";
$name = $_POST['name2'];
$phone  = $_POST['phone2'];
$mail  = $_POST['mail2'];
$mess  = $_POST['mess2'];

// Формирование заголовка письма
$subject  = "Вопрос Алтафит";
$headers  = "From: Алтафит \r\n";
$headers .= "Reply-To: ". strip_tags($usermail) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
// Формирование тела письма
$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Вопрос Алтафит</h2>\r\n";
$msg .= "<p><strong>Имя:</strong> ".$name."</p>\r\n";
$msg .= "<p><strong>Телефон:</strong> ".$phone."</p>\r\n";
$msg .= "<p><strong>Мейл:</strong> ".$mail."</p>\r\n";
$msg .= "<p><strong>Сообщение:</strong> ".$mess."</p>\r\n";
$msg .= "</body></html>";

// отправка сообщения
if(@mail($sendto, $subject, $msg, $headers)) {
	echo "true";
} else {
	echo "false";
}

?>