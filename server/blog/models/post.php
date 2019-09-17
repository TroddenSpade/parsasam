<?php
class Post{
 
    // database connection and table author
    private $conn;
    private $table_posts = "posts";
 
    // object properties
    public $id;
    public $author;
    public $title;
    public $description;
    public $markdown;
 
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }
    
    //read products
    public function read(){
    
        // select all query
        $query = "SELECT
                    p.id, p.author, p.description, p.title, p.markdown, p.created_at
                FROM
                    " . $this->table_posts . " p
                ORDER BY
                    p.created_at DESC";
    
        // prepare query statement
        $stmt = $this->conn->prepare($query);
    
        // execute query
        $stmt->execute();
    
        return $stmt;
    }
 
    // create product
    function create(){
    
        // query to insert record
        $query = "INSERT INTO
                    " . $this->table_posts . "
                SET
                    author=:author, title=:title, description=:description ,markdown=:markdown";
    
        // prepare query
        $stmt = $this->conn->prepare($query);
    
        // sanitize
        $this->author=htmlspecialchars(strip_tags($this->author));
        $this->title=htmlspecialchars(strip_tags($this->title));
        $this->description=htmlspecialchars(strip_tags($this->description));
        $this->markdown=htmlspecialchars(strip_tags($this->markdown));
    
        // bind values
        $stmt->bindParam(":author", $this->author);
        $stmt->bindParam(":title", $this->title);
        $stmt->bindParam(":description", $this->description);
        $stmt->bindParam(":markdown", $this->markdown);

        // execute query
        try{
            if($stmt->execute()){
                return true;
            }
        }catch(Exception $e){
            echo $e;
        }
    
        return false;
        
    }
}