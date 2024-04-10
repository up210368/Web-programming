<?php
include "./partials/Connection.php";

try {
    $sql = "Select e.id, concat(e.firstname, ' ', e.lastname) as fullname, t.title, t.id as taskid
    from user e inner join task t 
    on e.id = t.idUser;";
    $state = $conn->query($sql);

    $json = [];
    while($row = $state->fetch()){
        $json[] = [
            "id" => $row["id"],
            "taskid" => $row["taskid"],
            "title" => $row["title"],
            "fullname" => $row["fullname"]
        ];
    }
    echo json_encode($json);

} catch (PDOException $e) {
    die($e->getMessage());
}