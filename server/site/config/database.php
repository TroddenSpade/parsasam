<?php 
  class Database {
    private $host = 'localhost';
    private $db_name = 'parsasam_contact';
    private $username = "parsasam_contact";
    private $password = "pZh0sS5t";
    private $conn = null;

    public function getConnection() {
      try { 
        $this->conn = new PDO('mysql:host=' . $this->host . ';dbname=' . $this->db_name, $this->username, $this->password);
        $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $this->conn->exec("set names utf8");
        echo 'Connection success';

      } catch(PDOException $e) {
        echo 'Connection Error: ' . $e->getMessage();
      }
      return $this->conn;
    }
  }
?>