<?php

  $name = $_POST["name"];
  $body = $_POST["body"];
  $phone = $_POST["phone"];
  $email = $_POST["email"];

  $to      = 'parks.kendrick@gmail.com';
  $subject = "Sponsor Request from " . $name ;
  $message = "Sponsor Message: \r" . $body . "\rPhone Number: " . $phone;
  $header = "To: Meesh <michel@orangecountyvr.com>, Dylan <dylan@orangecountyvr.com>\r\n";
  $header.= "From: SponsorPage <contact@madwishlabs.com>\r\n"; 
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