<?php

namespace Doctut;

use DateTime;

require_once "bootstrap.php";

$theReporterId = $argv[1];
$theDefaultEngineerId = $argv[2];
$productIds = explode(",", $argv[3]);

$reporter = $entityManager->find("Doctut\\User", $theReporterId);
$engineer = $entityManager->find("Doctut\\User", $theDefaultEngineerId);
if (!$reporter || !$engineer) {
	echo "No reporter and/or engineer found for the input.\n";
	exit(1);
}

$bug = new Bug();
$bug->setDescription("Kiss Stupid!");
$bug->setCreated(new DateTime("now"));
$bug->setStatus("OPEN");

$bug->setReporter($reporter);
$bug->setEngineer($engineer);

foreach ($productIds as $productId) {
	$product = $entityManager->find("Doctut\\Product", $productId);
	$bug->assignToProduct($product);
}

$entityManager->persist($bug);
$entityManager->flush();

echo "Your new Bug Id: " . $bug->getId() . "\n";
