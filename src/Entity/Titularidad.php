<?php

namespace App\Entity;

use App\Repository\TitularidadRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TitularidadRepository::class)]
class Titularidad
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 200)]
    private ?string $nombre = null;

    #[ORM\Column]
    private ?bool $dependiente_concertado = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNombre(): ?string
    {
        return $this->nombre;
    }

    public function setNombre(string $nombre): static
    {
        $this->nombre = $nombre;

        return $this;
    }

    public function isDependienteConcertado(): ?bool
    {
        return $this->dependiente_concertado;
    }

    public function setDependienteConcertado(bool $dependiente_concertado): static
    {
        $this->dependiente_concertado = $dependiente_concertado;

        return $this;
    }
}
