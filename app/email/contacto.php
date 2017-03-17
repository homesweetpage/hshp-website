<?php

if($_POST){
    $name = $_REQUEST['first_name'];
    $lname = $_REQUEST['last_name'];
    $email = $_REQUEST['email'];
    $comment = $_REQUEST['comment'];

    $to = "hshpsoftware@gmail.com";

    $mensaje =
		"Nombre: " .$name ."\r\n"
        ."Apellido: " .$lname ."\r\n" ."\r\n"
		."Email: " .$email ."\r\n" ."\r\n"
        ."Comentario: " .$comment ."\r\n"
    ;

	$subject = "HSHP Web - Consulta de: " .$email;

	$header = "From: " .$email ."\r\n";
	$header.= "MIME-Version: 1.0\r\n";
	$header.= "Content-Type: text/plain; charset=utf-8\r\n";
	$header.= "X-Priority: 1\r\n";

    mail($to,$subject,$mensaje,$header);
}

?>
