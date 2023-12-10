<?php
namespace App\Service;

use App\Entity\UsuarioOficial;
use App\Repository\UsuarioOficialRepository;
use Doctrine\ORM\EntityManagerInterface;

class UsuarioService {
    public function __construct(private EntityManagerInterface $em, private UsuarioOficialRepository $usuarioRepository){}

    public function getUser($email): ?UsuarioOficial {
        return $this->usuarioRepository->getUserByEmail($email);
    }
}