<?php
include "./partials/Connection.php";

try {
    $sql = "Select e.id, concat(e.firstname, ' ', e.lastname) as fullname, t.title, t.idUser 
    from user e inner join task t 
    on e.id = t.idUser;";
    $state = $conn->query($sql);

    $json = [];
    while($row = $state->fetch()){
        $json[] = [
            "id" => $row["id"],
            "idUser" => $row["idUser"],
            "title" => $row["title"],
            "fullname" => $row["fullname"]
        ];
    }
    echo json_encode($json);

    
    /*
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
    echo $jsonString;*/
} catch (PDOException $e) {
    die($e->getMessage());
}