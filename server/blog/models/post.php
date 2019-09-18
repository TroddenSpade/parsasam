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
    public $created_at;

    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }
    
    //read products
    public function read($off){
    
        // select all query
        $query = "SELECT
                    p.id, p.author, p.description, p.title, p.markdown, p.created_at
                FROM
                    " . $this->table_posts . " p
                ORDER BY
                    p.id ASC
                LIMIT 
                    ". $off .", 5";
    
        // prepare query statement
        $stmt = $this->conn->prepare($query);
    
        // execute query
        $stmt->execute();
    
        return $stmt;
    }

    function readOne(){
 
        // query to read single record
        $query = "SELECT
                    p.id, p.author, p.description, p.title, p.markdown, p.created_at
                FROM
                    " . $this->table_posts . " p
                WHERE
                    p.markdown = ?
                LIMIT
                    0,1";
     
        // prepare query statement
        $stmt = $this->conn->prepare( $query );
     
        // bind id of product to be updated
        $stmt->bindParam(1, $this->id);
     
        // execute query
        try{
            $stmt->execute();
        }catch(Exception $e){
            echo $e;
        }

        // get retrieved row
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
     
        // set values to object properties
        $this->id = $row['id'];
        $this->author = $row['author'];
        $this->title = $row['title'];
        $this->description = $row['description'];
        $this->markdown = $row['markdown'];
        $this->created_at = $row['created_at'];
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