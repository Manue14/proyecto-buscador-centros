<?php

namespace App\Entity;

use App\Repository\CentroEducativoRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CentroEducativoRepository::class)]
class CentroEducativo
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?int $concello_id = null;

    #[ORM\Column]
    private ?int $titularidad_id = null;

    #[ORM\Column(length: 100)]
    private ?string $nombre = null;

    #[ORM\Column(length: 100)]
    private ?string $direccion = null;

    #[ORM\Column(length: 5)]
    private ?string $cod_postal = null;

    #[ORM\Column(length: 9, nullable: true)]
    private ?string $telefono = null;

    #[ORM\Column]
    private ?float $coordenada_x = null;

    #[ORM\Column]
    private ?float $coordenada_y = null;

    #[ORM\Column(length: 20)]
    private ?string $tipo_de_centro = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getConcelloId(): ?int
    {
        return $this->concello_id;
    }

    public function setConcelloId(int $concello_id): static
    {
        $this->concello_id = $concello_id;

        return $this;
    }

    public function getTitularidadId(): ?int
    {
        return $this->titularidad_id;
    }

    public function setTitularidadId(int $titularidad_id): static
    {
        $this->titularidad_id = $titularidad_id;

        return $this;
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

    public function getDireccion(): ?string
    {
        return $this->direccion;
    }

    public function setDireccion(string $direccion): static
    {
        $this->direccion = $direccion;

        return $this;
    }

    public function getCodPostal(): ?string
    {
        return $this->cod_postal;
    }

    public function setCodPostal(string $cod_postal): static
    {
        $this->cod_postal = $cod_postal;

        return $this;
    }

    public function getTelefono(): ?string
    {
        return $this->telefono;
    }

    public function setTelefono(?string $telefono): static
    {
        $this->telefono = $telefono;

        return $this;
    }

    public function getCoordenadaX(): ?float
    {
        return $this->coordenada_x;
    }

    public function setCoordenadaX(float $coordenada_x): static
    {
        $this->coordenada_x = $coordenada_x;

        return $this;
    }

    public function getCoordenadaY(): ?float
    {
        return $this->coordenada_y;
    }

    public function setCoordenadaY(float $coordenada_y): static
    {
        $this->coordenada_y = $coordenada_y;

        return $this;
    }

    public function getTipoDeCentro(): ?string
    {
        return $this->tipo_de_centro;
    }

    public function setTipoDeCentro(string $tipo_de_centro): static
    {
        $this->tipo_de_centro = $tipo_de_centro;

        return $this;
    }
}
