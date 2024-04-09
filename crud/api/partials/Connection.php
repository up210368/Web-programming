<?php

$host = "localhost";
$dbName = "tasklist";
$user = "root";
$password = "";
$protocol = "mysql:host={$host};dbname={$dbName}";
try {
  // Generación de la Conexion a la base de datos
  $conn = new PDO($protocol, $user, $password);
} catch (PDOException $e) {
  die($e->getMessage()); // si sucede un error, hasta aqui termina el proceso.
}
