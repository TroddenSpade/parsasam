<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');
 
// include database and object files
include_once '../config/database.php';
include_once '../models/post.php';
 
// get database connection
$database = new Database();
$db = $database->getConnection();
 
// prepare post object
$post = new Post($db);
 
// set ID property of record to read
$post->id = isset($_GET['id']) ? $_GET['id'] : die();
 
// read the details of post to be edited
$post->readOne();
 
if($post->markdown!=null){
    // create array
    $post_arr = array(
        "id" => $post->id,
        "title" => $post->title,
        "description" => html_entity_decode($post->description),
        "author" => $post->author,
        "markdown" => $post->markdown,
        "created_at" => $post->created_at
 
    );
 
    // set response code - 200 OK
    http_response_code(200);
 
    // make it json format
    echo json_encode($post_arr);
}
 
else{
    // set response code - 404 Not found
    http_response_code(404);
 
    // tell the user post does not exist
    echo json_encode(array(
        "message" => "Product does not exist.",
        "status" => '404'
    ));
}
?>