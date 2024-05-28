<?php

namespace Doctut;

require_once "bootstrap.php";

$id = $argv[1];
$product = $entityManager->find('Doctut\\Product', $id);

if ($product === null) {
	echo "No product found.\n";
	exit(1);
}

echo sprintf("-%s\n", $product->getName());
