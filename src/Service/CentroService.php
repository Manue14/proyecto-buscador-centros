<?php
namespace App\Service;

use App\Entity\CentroEducativo;
use App\Repository\CentroEducativoRepository;
use Doctrine\ORM\EntityManagerInterface;

class CentroService {
    public function __construct(private EntityManagerInterface $em, private CentroEducativoRepository $centroRepository){}

    public function list() {
        $centros = $this->centroRepository->findAll();
        return $centros;
    }
}