<?php

namespace Doctut;

require_once "bootstrap.php";

$theBugId = $argv[1];
$bug = $entityManager->find("Doctut\\Bug", (int) $theBugId);
$bug->close();
$entityManager->flush();
