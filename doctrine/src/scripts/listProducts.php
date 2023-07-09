<?php

namespace Doctut;

require_once "bootstrap.php";

$productRepository = $entityManager->getRepository('Doctut\\Product');
$products = $productRepository->findAll();
foreach ($products as $product) {
	echo sprintf("-%s\n", $product->getName());
}
