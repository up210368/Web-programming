<?php
include "./partials/Connection.php";

try {
    $sql = "Select * from task where id = {$idTask};";
    $state = $conn->query($sql);
    $row = $state->fetch();
    $json = [
        "id" => $row["id"],
        "idUser" => $row["idUser"],
        "title" => $row["title"],
        "completed" => $row["completed"] == 1
    ];
    $jsonString = json_encode($json);
    echo $jsonString;
} catch (PDOException $e) {
    die($e->getMessage());
}