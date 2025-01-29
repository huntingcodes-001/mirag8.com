<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["status" => "error", "message" => "Invalid email address."]);
        exit;
    }

    $file = "subscribers.txt";
    $entry = "Email: " . $email . "\n\n";

    if (file_put_contents($file, $entry, FILE_APPEND | LOCK_EX)) {
        echo json_encode(["status" => "success", "message" => "Subscription successful!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to save email."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request."]);
}
?>
