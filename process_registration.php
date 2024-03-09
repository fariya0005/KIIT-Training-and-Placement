<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
$username = "your_username";
$password = "your_password";
$host = "your_host";
$service_name = "your_service_name";

$conn = oci_connect($username, $password, "(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=$host)(PORT=1521)))(CONNECT_DATA=(SID=$service_name)))");

if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

$name = $_POST['name'];
$roll = $_POST['roll'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$program = $_POST['program'];
$year = $_POST['year'];
$interests = $_POST['interests'];

// Validate form data
if (empty($name) || empty($roll) || empty($email) || empty($phone) || empty($program) || empty($year) || empty($interests)) {
    echo "All fields are required.";
    exit;
}

// Additional validation for specific fields (e.g., email format, phone number format, etc.)
// Implement your specific validation rules here...

// Add form validation logic here before executing the query
// ...

$query = "INSERT INTO registrations (name, roll, email, phone, program, year, interests) VALUES ('$name', '$roll', '$email', '$phone', '$program', $year, '$interests')";

$stmt = oci_parse($conn, $query);

if (oci_execute($stmt)) {
    oci_commit($conn); // Commit the transaction if execution is successful
    oci_free_statement($stmt);
    oci_close($conn);

    header("Location: your_webpage.html");
    exit();
} else {
    $error_message = oci_error($stmt);
    oci_free_statement($stmt);
    oci_close($conn);
    
    // Display an error message to the user (you can customize this part)
    echo "An error occurred: " . $error_message['message'];
}
?>
