<?php
require_once 'vendor/autoload.php';

$elasticaClient = new \Elastica\Client();

// Load index
$elasticaIndex = $elasticaClient->getIndex('twitter');

// Create the index new
$elasticaIndex->create(
    array(
        'number_of_shards' => 4,
        'number_of_replicas' => 1,
        'analysis' => array(
            'analyzer' => array(
                'default_index' => array(
                    'type' => 'custom',
                    'tokenizer' => 'standard',
                    'filter' => array('lowercase', 'mySnowball')
                ),
                'default_search' => array(
                    'type' => 'custom',
                    'tokenizer' => 'standard',
                    'filter' => array('standard', 'lowercase', 'mySnowball')
                )
            ),
            'filter' => array(
                'mySnowball' => array(
                    'type' => 'snowball',
                    'language' => 'German'
                )
            )
        )
    ),
    true
);

//Create a type
$elasticaType = $elasticaIndex->getType('tweet');

// Define mapping
$mapping = new \Elastica\Type\Mapping();
$mapping->setType($elasticaType);

// Set mapping
$mapping->setProperties(array(
    'id'      => array('type' => 'integer', 'include_in_all' => FALSE),
    'user'    => array(
        'type' => 'object',
        'properties' => array(
            'name'      => array('type' => 'string', 'include_in_all' => TRUE),
            'fullName'  => array('type' => 'string', 'include_in_all' => TRUE, 'boost' => 2)
        ),
    ),
    'msg'     => array('type' => 'string', 'include_in_all' => TRUE),
    'tstamp'  => array('type' => 'date', 'include_in_all' => FALSE),
    'location'=> array('type' => 'geo_point', 'include_in_all' => FALSE)
));

// Send mapping to type
$mapping->send();

require "documents.php";

