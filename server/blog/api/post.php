<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
// get database connection
include_once '../config/database.php';
 
// instantiate post object
include_once '../models/post.php';
 
$database = new Database();
$db = $database->getConnection();
 
$post = new Post($db);
 
// get posted data
$data = json_decode(file_get_contents("php://input"));
 
// make sure data is not empty
if(
    !empty($data->title) &&
    !empty($data->author) &&
    !empty($data->markdown) &&
    !empty($data->description)
){
 
    // set post property values
    $post->title = $data->title;
    $post->author = $data->author;
    $post->description = $data->description;
    $post->markdown = $data->markdown;
 
    // create the post
    if($post->create()){
 
        // set response code - 201 created
        http_response_code(201);
 
        // tell the user
        echo json_encode(array("post" => "post was created."));
    }
 
    // if unable to create the post, tell the user
    else{
 
        // set response code - 503 service unavailable
        http_response_code(503);
 
        // tell the user
        echo json_encode(array("post" => "Unable to create post."));
    }
}
 
// tell the user data is incomplete
else{
 
    // set response code - 400 bad request
    http_response_code(400);
 
    // tell the user
    echo json_encode(array("post" => "Unable to create post. Data is incomplete."));
}
?>