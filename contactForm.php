<?php
 $to = 'h1004s@hotmail.com';
 $subject = 'New Form submission';
 
 $name = $_POST['name'];
 $email = $_POST['email'];
 $message = $_POST['message'];
 


$header = "From: $email";

mail($to,$subject,$message,$header);
echo "your message has been sent";
echo "$name \n $email \n $message \n $to \n $subject"

 ?>


