<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Process the POST request

    if (!$_POST) exit;

    function isEmail($email) {
        return filter_var($email, FILTER_VALIDATE_EMAIL);
    }
    $email = $_POST['email'];

    if (empty($email)) {
        echo '<div class="alert alert-error">You must enter your email address.</div>';
        exit();

    }     

    $to = "pixidiv730@jucatyo.com"; // Replace with your Email.
    $subject = "Subcription Form Submission";
    $message = "You have received a contact form submission from $email. 
        Below are the details:" . PHP_EOL . PHP_EOL;

    $message .= "Email: $email" . PHP_EOL;

    // Implement the recommended email sending method
    $success = mail($to, $subject, $message, "From: $email" . PHP_EOL);

    if ($success) {
        echo '<div class="alert alert-success">';
        echo "Subscribed successfully. Check your email for confirmation.";
        echo '</div>';
    } else {
        echo 'ERROR!';
    }
} else {
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}
?>
