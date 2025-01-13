<?php

function loadEnv($filePath) {
    if (file_exists($filePath)) {
        $lines = file($filePath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        
        foreach ($lines as $line) {
            // Ignore comments and empty lines
            if (strpos(trim($line), '#') === 0 || empty($line)) {
                continue;
            }

            // Split the line by '='
            list($key, $value) = explode('=', $line, 2);
            
            // Trim spaces and assign the value to an environment variable
            $key = trim($key);
            $value = trim($value);
            putenv("$key=$value");
        }
    } else {
        throw new Exception("The .env file does not exist.");
    }
}

// Load the .env file
loadEnv(__DIR__ . '/../.env');

// Get the environment variables
$myEmail = getenv('EMAIL_USERNAME');
$myPassword = getenv('EMAIL_PASSWORD');

// Include the necessary PHPMailer class files
require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST['fullName']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit;
    }

    // Create PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();                                    // Set mailer to use SMTP
        $mail->Host = 'smtp.gmail.com';                     // Set the SMTP server to Gmail
        $mail->SMTPAuth = true;                             // Enable SMTP authentication
        $mail->Username = $myEmail;                         // SMTP username (your Gmail email)
        $mail->Password = $myPassword;                      // SMTP password (your Gmail password or App Password)
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Enable TLS encryption
        $mail->Port = 587;                                  // TCP port to connect to

        // Recipients
        $mail->setFrom($email, $name);
        $mail->Sender = $email; 
        $mail->addAddress('patrick.m.developer@gmail.com'); // Add your email address here
        $mail->addReplyTo($email, $name);                   // Set the reply-to address to the contact's email

        // Content
        $mail->isHTML(false);                               // Set email format to plain text
        $mail->Subject = "Portfolio Contact from: $name";

        // Enhanced plain text email content with clearer structure
        $mail->Body = "
        You have received a new message from your portfolio website contact form:
        
        -----------------------------------
        Name: $name
        Email: $email
        
        Message:
        -----------------------------------
        $message
        
        -----------------------------------
        This message was sent from your portfolio contact form.
        ";

        // Send the email
        $mail->send();
        echo "Message sent successfully!";
    } catch (Exception $e) {
        echo "There was an error sending your message. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
