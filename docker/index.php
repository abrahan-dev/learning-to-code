<?php

require_once __DIR__ . '/vendor/autoload.php';

use Monolog\Handler\StreamHandler;
use Monolog\Logger;

# test including composer dependencies
$log = new Logger('name');
$log->pushHandler(new StreamHandler('hello.log', Logger::WARNING));
$log->warning('Foo');
$log->error('Bar');

$message = 'Hola docker!';
echo $message;

# test including database connection inside another docker service
try {
    $user = getenv('MYSQL_USER');
    $pass = getenv('MYSQL_PASSWORD');
    $host = getenv('MYSQL_HOST');

    $dbh = new PDO('mysql:host='.$host.';dbname=test', $user, $pass);
    var_dump($dbh->query('select * from users')->fetchAll());
    $dbh = null;
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}

# test including env variables
var_dump($undefinedVar);
