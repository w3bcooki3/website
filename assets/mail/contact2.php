<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Process the POST request

    // Check if the POST array is empty
    if (empty($_POST)) {
        exit('<div class="alert alert-error">No data received.</div>');
    }

    function isEmail($email) {
        return filter_var($email, FILTER_VALIDATE_EMAIL);
    }

    // Sanitize input data
    $fname = htmlspecialchars($_POST['first_name']);
    $lname = htmlspecialchars($_POST['last_name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone_number']);
    $homeland = htmlspecialchars($_POST['country']);
    $company_type = htmlspecialchars($_POST['choice_company']);
    $services = isset($_POST['services']) ? implode(", ", array_map('htmlspecialchars', $_POST['services'])) : '';
    $message = htmlspecialchars($_POST['message']);
    $budget = isset($_POST['budget']) ? htmlspecialchars($_POST['budget']) : 'Not specified';
    $privacy_policy_accept = isset($_POST['privacy_policy_accept']) ? htmlspecialchars($_POST['privacy_policy_accept']) : '0';

    // Validate input data
    if (empty($fname)) {
        exit('<div class="alert alert-error">You must enter your first name.</div>');
    } elseif (empty($lname)) {
        exit('<div class="alert alert-error">You must enter your last name.</div>');
    } elseif (empty($email)) {
        exit('<div class="alert alert-error">You must enter your email address.</div>');
    } elseif (!isEmail($email)) {
        exit('<div class="alert alert-error">You must enter a valid email address.</div>');
    } elseif (empty($phone)) {
        exit('<div class="alert alert-error">Please fill in the phone number field!</div>');
    } elseif (empty($homeland)) {
        exit('<div class="alert alert-error">Please fill in the country field!</div>');
    } elseif (empty($company_type)) {
        exit('<div class="alert alert-error">Please select the type of your company!</div>');
    } elseif (empty($services)) {
        exit('<div class="alert alert-error">Please select the services you need!</div>');
    } elseif (empty($message)) {
        exit('<div class="alert alert-error">You must enter your message.</div>');
    } elseif (!isset($privacy_policy_accept) || $privacy_policy_accept != '1') {
        exit('<div class="alert alert-error">You must agree to our terms and conditions!</div>');
    }

    $to = "wordpressriver@gmail.com";
    $subject = "Contact Form Submission from $fname $lname";
    $messageBody = "You have received a contact form submission from $fname $lname. Below are the details:" . PHP_EOL . PHP_EOL;
    $messageBody .= "First Name: $fname" . PHP_EOL;
    $messageBody .= "Last Name: $lname" . PHP_EOL;
    $messageBody .= "Email: $email" . PHP_EOL;
    $messageBody .= "Phone Number: $phone" . PHP_EOL;
    $messageBody .= "Country: $homeland" . PHP_EOL;
    $messageBody .= "Company Type: $company_type" . PHP_EOL;
    $messageBody .= "Services Needed: $services" . PHP_EOL;
    $messageBody .= "Budget: $budget" . PHP_EOL . PHP_EOL;
    $messageBody .= "Privacy_policy_accept: $privacy_policy_accept" . PHP_EOL . PHP_EOL;
    $messageBody .= "Message: " . PHP_EOL . $message;

    // Implement the recommended email sending method
    $headers = "From: $email" . PHP_EOL;
    $success = mail($to, $subject, $messageBody, $headers);

    if ($success) {
        echo '<div class="alert alert-success">';
        echo '<h3>Email Sent Successfully.</h3>';
        echo "<p>Thank you <strong>$fname</strong>, your message has been submitted to us.</p>";
        echo '</div>';
    } else {
        echo 'ERROR!';
    }
} else {
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}
?>
