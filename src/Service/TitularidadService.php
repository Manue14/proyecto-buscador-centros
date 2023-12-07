<?php
namespace App\Service;

use App\Entity\Titularidad;
use App\Repository\TitularidadRepository;
use Doctrine\ORM\EntityManagerInterface;

class TitularidadService {
    public function __construct(private EntityManagerInterface $em, private TitularidadRepository $titularidadRepository){}

    public function findBy($nombre, $dependencia) {
        if (empty($nombre)) {
            return 0;
        }

        if (isset($dependencia)) {
            return $this->titularidadRepository->findByNombreDependencia($nombre, $dependencia);
        }
        
        return $this->titularidadRepository->findByNombre($nombre);
    }
}