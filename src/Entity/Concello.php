<?php

namespace App\Entity;

use App\Repository\ConcelloRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ConcelloRepository::class)]
class Concello
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 200)]
    private ?string $nombre = null;

    #[ORM\Column]
    private ?int $provincia_id = null;

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

    public function getProvinciaId(): ?int
    {
        return $this->provincia_id;
    }

    public function setProvinciaId(int $provincia_id): static
    {
        $this->provincia_id = $provincia_id;

        return $this;
    }
}
