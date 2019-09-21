<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// include database and object files
include_once '../config/database.php';
include_once '../models/post.php';

// instantiate database and post object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$post = new Post($db);

$off = isset($_GET['off']) ? $_GET['off'] : die();
 
// query posts
$stmt = $post->read($off);
$num = $stmt->rowCount();
 
// check if more than 0 record found
if($num>0){
 
    // posts array
    $posts_arr=array();
    $posts_arr["records"]=array();
 
    // retrieve our table contents
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        extract($row);
 
        $post_item=array(
            "id" => $id,
            "title" => $title,
            "description" => html_entity_decode($description),
            "author" => $author,
            "markdown" => $markdown,
            "created_at" => $created_at
        );
 
        array_push($posts_arr["records"], $post_item);
    }
 
    // set response code - 200 OK
    http_response_code(200);
 
    // show posts data in json format
    echo json_encode($posts_arr);
}else{
 
    // set response code - 404 Not found
    http_response_code(404);
 
    // tell the user no posts found
    echo json_encode(
        array(
            "message" => "No posts found.",
            "status"=>"404"
        )
    );
}