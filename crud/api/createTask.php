<?php
include "./partials/Connection.php";

$title = $_POST['title'];
$userId = $_POST['users'];

try {
    $insert = $conn->prepare("Insert into task (id, title, completed, idUser) values (null, ?, 0, ?)");
    $insert->execute([$title, $userId]);
} catch (PDOException $e) {
    die($e->getMessage());
}
?>