<?php
class Message{
 
    // database connection and table name
    private $conn;
    private $table_name = "messages";
 
    // object properties
    public $id;
    public $name;
    public $message;
    public $email;
 
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }
    // read products
    // public function read(){
    
    //     // select all query
    //     $query = "SELECT
    //                 c.name as category_name, p.id, p.name, p.message, p.email, p.category_id, p.created
    //             FROM
    //                 " . $this->table_name . " p
    //                 LEFT JOIN
    //                     categories c
    //                         ON p.category_id = c.id
    //             ORDER BY
    //                 p.created DESC";
    
    //     // prepare query statement
    //     $stmt = $this->conn->prepare($query);
    
    //     // execute query
    //     $stmt->execute();
    
    //     return $stmt;
    // }
 
    // create product
    function create(){
    
        // query to insert record
        $query = "INSERT INTO
                    " . $this->table_name . "
                SET
                    name=:name, email=:email, message=:message";
    
        // prepare query
        $stmt = $this->conn->prepare($query);
    
        // sanitize
        $this->name=htmlspecialchars(strip_tags($this->name));
        $this->email=htmlspecialchars(strip_tags($this->email));
        $this->message=htmlspecialchars(strip_tags($this->message));
    
        // bind values
        $stmt->bindParam(":name", $this->name);
        $stmt->bindParam(":email", $this->email);
        $stmt->bindParam(":message", $this->message);
    
        // execute query
        if($stmt->execute()){
            return true;
        }
    
        return false;
        
    }
}