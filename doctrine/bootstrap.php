<?php

namespace Doctut;

use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;

require_once "vendor/autoload.php";

$doctrineConfig = Setup::createYAMLMetadataConfiguration(array(
                                                             __DIR__ . "/config/yaml"
                                                         ), $isDevMode = true
);

$dbconfig = array(
	'driver' => 'pdo_mysql',
	'user' => 'root',
	'password' => '',
	'dbname' => 'doctrine',
);

$entityManager = EntityManager::create($dbconfig, $doctrineConfig);
