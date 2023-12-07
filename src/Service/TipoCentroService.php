<?php
namespace App\Service;

use App\Entity\TipoCentro;
use App\Repository\TipoCentroRepository;
use Doctrine\ORM\EntityManagerInterface;

class TipoCentroService {
    public function __construct(private EntityManagerInterface $em, private TipoCentroRepository $tipoCentroRepository){}

    public function list() {
        $tiposCentro = $this->tipoCentroRepository->findAll();
        return $tiposCentro;
    }
}