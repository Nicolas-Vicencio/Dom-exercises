<?php
if(isset($_POST)){
  error_reporting();    
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $comments = $_POST['comments'];
  $domain = $_SERVER['HTTP_HOST'];
  
  $to = 'burritosh1@gmail.com';
  $subject = "Contacto desde el formulario del sitio $domain ";
  $message = "
    <p>
      Datos enviados desde el formulario del sitio <b>$domain</b>   
    </p>
    <ul>
      <li>Nombre <b>$name</b></li>
      <li>Email <b>$email</b<</li>
      <li>Asunto $subject</li>
      <li>Comentarios $email<</li>
    </ul>

    ";

$headers = "MIME-Version: 1.0\r\n"."Content-type: text/html;charset:utf-8\r\n"."From: Envio Automatico No Responder <no-reply@$domain>";





$send_mail = mail($to, $subject, $message, $headers);
if($send_mail){
  $res = [
    "err" => false, 
    "message" => "Tus datos han sido enviados"
  ];
}else{
  $res = [
    "err"=> true, 
    "message" => "Error al enviar tus datos, intenta nuevamente"
  ]
 ; 
}

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
// header("Access-Control_Allow-Origins: https://jonmircha.com");
echo json_encode($res);
exit;

}
?>