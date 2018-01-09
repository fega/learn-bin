<?php require 'vendor/autoload.php';

// instantiate the App object
$app = new \Slim\App();

// Add route callbacks
$app->get('/', function ($request, $response, $args) {
    return $response->withStatus(200)->write('Hello World!');
});
$app->get('/hello ', function ($request, $response, $args) {
    return $response->withStatus(200)->write('Hello World!');
});
$app->get('/hello/{name}', function ($request, $response) {
    $name = $request->getAttribute('name');
    $response->getBody()->write("Hello, $name");

    return $response;
});
// Run application
$app->run();
