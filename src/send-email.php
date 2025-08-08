<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "atorotywos@gmail.com";
    $subject = "New Booking Inquiry";
    $body = $_POST['body'];
    $headers = "From: noreply@ronniesgardens.com";
    mail($to, $subject, $body, $headers);
    echo "Success";
}
?>