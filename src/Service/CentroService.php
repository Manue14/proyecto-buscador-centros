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

    public function queryBuilder($nombre, $tipo_de_centro, $provincia_id, $concello_id, $titularidad_nombre, $titularidad_dependencia) {
        return $this->centroRepository->filterBy($nombre, $tipo_de_centro, $provincia_id, $concello_id, $titularidad_nombre, $titularidad_dependencia);
    }
}