<?php
/**
 * Created by PhpStorm.
 * User: brhmms
 * Date: 31/10/16
 * Time: 18:47
 */
$elasticaType->addDocument(new \Elastica\Document(1, array(
    'id' => 1,
    'user' => array(
        'name' => 'mewantcookie',
        'fullName' => 'Cookie Monster'
    ),
    'msg' => 'Me wish there were expression for cookies like there is for apples. "A cookie a day make the doctor diagnose you with diabetes" not catchy.',
    'tstamp' => time(),
    'location' => '41.12,-71.34'
)));
$elasticaType->getIndex()->refresh();

$elasticaType->addDocument(new \Elastica\Document(2, array(
    'id' => 2,
    'user' => array(
        'name' => 'topale',
        'fullName' => 'CC Monster'
    ),
    'msg' => 'Me wish there were expression for cookies like there is for apples. "A cookie a day make the doctor diagnose you with diabetes" not catchy.',
    'tstamp' => time(),
    'location' => '41.12,-71.34'
)));
$elasticaType->getIndex()->refresh();

$elasticaType->addDocument(new \Elastica\Document(3, array(
    'id' => 3,
    'user' => array(
        'name' => 'nimeo',
        'fullName' => 'Monster B'
    ),
    'msg' => 'Me wish there were expression for cookies like there is for apples. "A cookie a day make the doctor diagnose you with diabetes" not catchy.',
    'tstamp' => time(),
    'location' => '41.12,-71.34'
)));
$elasticaType->getIndex()->refresh();

$elasticaType->addDocument(new \Elastica\Document(4, array(
    'id' => 4,
    'user' => array(
        'name' => 'nmoead',
        'fullName' => 'Monster'
    ),
    'msg' => 'Me wish there were expression for cookies like there is for apples. "A cookie a day make the doctor diagnose you with diabetes" not catchy.',
    'tstamp' => time(),
    'location' => '41.12,-71.34'
)));
$elasticaType->getIndex()->refresh();

$elasticaType->addDocument(new \Elastica\Document(5, array(
    'id' => 5,
    'user' => array(
        'name' => 'waity',
        'fullName' => 'Cookie'
    ),
    'msg' => 'Me wish there were expression for cookies like there is for apples. "A cookie a day make the doctor diagnose you with diabetes" not catchy.',
    'tstamp' => time(),
    'location' => '41.12,-71.34'
)));
$elasticaType->getIndex()->refresh();