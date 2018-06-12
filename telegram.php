 <?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$study = $_POST['study'];
$token = "490422434:AAFV_ILq4n0eklIswsf2IzttcStg9yUIEAA";
$chat_id = "-281150062";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Тип обучения: ' => $study
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  echo '<script language="javascript">';
echo 'alert("message successfully sent")';
echo '</script>';
  header('Location: index.html#form');
} else {
  echo "Error";
}
?>
