<?php
// Replace placeholders with actual values
$servername = "bt21053281"; // Change to your database server name
$username = "FARIYA"; // Change to your database username
$password = "21053281"; // Change to your database password
$dbname = "students"; // Change to your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Function to sanitize user input
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Collect and sanitize form data
$name = sanitize_input($_POST['name']);
$roll = sanitize_input($_POST['roll']);
$email = sanitize_input($_POST['email']);
$phone = sanitize_input($_POST['phone']);
$program = sanitize_input($_POST['program']);
$year = sanitize_input($_POST['year']);
$interests = sanitize_input($_POST['interests']);

// Form validation
if (empty($name) || empty($roll) || empty($email) || empty($phone) || empty($program) || empty($year) || empty($interests)) {
    die("Error: All fields are required.");
}

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("Error: Invalid email format.");
}

// Prepare SQL statement to insert data into the table using prepared statements
$sql = "INSERT INTO students (name, roll, email, phone, program, year, interests) VALUES (?, ?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssssis", $name, $roll, $email, $phone, $program, $year, $interests);

// Execute SQL statement
if ($stmt->execute()) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close statement and connection
$stmt->close();
$conn->close();
?>
