<?php
$first_name = $_POST['first_name'] ?? '';
$last_name = $_POST['last_name'] ?? '';
$username = $_POST['username'] ?? '';
$city = $_POST['city'] ?? '';
$state = $_POST['state'] ?? '';
$zip = $_POST['zip'] ?? '';

if ($first_name && $last_name && $username) {
    $data = [$first_name, $last_name, $username, $city, $state, $zip];
    $fp = fopen("form_data.csv", "a");
    fputcsv($fp, $data);
    fclose($fp);

    echo "✅ Data saved for $first_name $last_name";
} else {
    echo "❌ Missing required fields!";
}
?>
