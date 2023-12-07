<?php
namespace App\Service;

use App\Entity\Concello;
use App\Repository\ConcelloRepository;
use Doctrine\ORM\EntityManagerInterface;

class ConcelloService {
    public function __construct(private EntityManagerInterface $em, private ConcelloRepository $concelloRepository){}

    public function list() {
        $concellos = $this->concelloRepository->findAll();
        return $concellos;
    }

    public function findByProvincia($provincia_id) {
        $concellos = $this->concelloRepository->findByProvincia($provincia_id);
        return $concellos;
    }
}