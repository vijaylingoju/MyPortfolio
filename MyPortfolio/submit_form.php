<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Gather form data
    echo "hello";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Email recipient (your email address)
    $to = "vijaylingoju111@gmail.com";

    // Email subject
    $email_subject = "New Contact Form Submission: $subject";

    // Email content
    $email_body = "You have received a new message from $name ($email):\n\n$message";

    // Headers
    $headers = "From: $email\n";
    $headers .= "Reply-To: $email";

    // Send email
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "Thank you for your message!";
    } else {
        echo "Oops! Something went wrong.";
    }
}
?>
