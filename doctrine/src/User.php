<?php

namespace Doctut;

use Doctrine\Common\Collections\ArrayCollection;

class User
{

	protected $id;
	protected $name;
	protected $reportedBugs;
	protected $assignedBugs;

	public function __construct()
	{
		$this->reportedBugs = new ArrayCollection();
		$this->assignedBugs = new ArrayCollection();
	}

	public function getId()
	{
		return $this->id;
	}

	public function getName()
	{
		return $this->name;
	}

	public function setName($name)
	{
		$this->name = $name;
	}

	public function addReportedBug($bug)
	{
		$this->reportedBugs[] = $bug;
	}

	public function assignedToBug($bug)
	{
		$this->assignedBugs[] = $bug;
	}

}
