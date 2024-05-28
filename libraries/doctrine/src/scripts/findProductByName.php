<?php

namespace Doctut;

require_once 'bootstrap.php';

$product = $entityManager
		->getRepository('Doctut\\Product')
		->findOneBy(
			array(
				'name' => $argv[1]
			)
);

echo 'The product '.$product->getName().' has id '.$product->getId().PHP_EOL;
