<?php

  $name = $_POST["name"];
  $body = $_POST["body"];
  $phone = $_POST["phone"];
  $email = $_POST["email"];

  $to      = 'dylanwatkins@gmail.com';
  $subject = "MadWish Contact form from " . $name ;
  $message = "Contact Message: \r" . $body . "\rPhone Number: " . $phone;
  $header = "To: Meesh <michelhaddad7@gmail.com>, Dylan <dylanwatkins@gmail.com>\r\n";
  $header.= "From: MadWishContactForm <info@madwishlabs.com>\r\n"; 
  $header.= "MIME-Version: 1.0\r\n"; 
  $header.= "Content-Type: text/plain; charset=utf-8\r\n"; 
  $header.= "X-Priority: 1\r\n"; 
  $header.= 'X-Mailer: PHP/' . phpversion();
  $header.= "Reply-To: " . $email . "\r\n";

  //function that sends the mail
  //much have a to, subject, message, and a header with From in it (check your host for the right formatting on the header)
  //the from in the header must also be an email address on the server
  mail($to, $subject, $message, $header);
  //redirect page
  header( "Location: http://www.madwishlabs.com" );
  exit();



?>