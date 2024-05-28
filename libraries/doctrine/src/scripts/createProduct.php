<?php

namespace Doctut;

require_once "bootstrap.php";

use Doctut\Product;

$product = new Product();
$product->setName($argv[1]);
$entityManager->persist($product);
$entityManager->flush();
echo "Created Product with ID " . $product->getId() . "\n";
