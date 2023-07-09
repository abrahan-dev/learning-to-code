<?php

namespace Doctut;

require_once "bootstrap.php";

$theBugId = $argv[1];

$bug = $entityManager->find("Doctut\\Bug", (int) $theBugId);
if(!$bug) {
	echo "No bug found for the input.\n";
	exit(1);
}
echo "Bug: " . $bug->getDescription() . "\n";
echo "Status: " . $bug->getStatus() . "\n";
echo "Engineer: " . $bug->getEngineer()->getName() . "\n";
